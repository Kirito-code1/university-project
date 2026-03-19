import { Injectable, OnModuleInit, Inject, forwardRef } from '@nestjs/common';
import { Telegraf, Markup } from 'telegraf';
import { ConfigService } from '@nestjs/config';
import { ApplicationsService } from '../applications/applications.service';
import { Application } from '../applications/entity/application.entity';

@Injectable()
export class TelegramService implements OnModuleInit {
  private bot!: Telegraf;
  private adminChatId!: string;

  constructor(
    @Inject(forwardRef(() => ApplicationsService))
    private readonly applicationsService: ApplicationsService,
    private readonly configService: ConfigService,
  ) {}

  onModuleInit() {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_ADMIN_CHAT_ID;

    if (!token || !chatId) {
      throw new Error(
        'TELEGRAM_BOT_TOKEN or TELEGRAM_ADMIN_CHAT_ID is missing',
      );
    }

    this.adminChatId = chatId;
    this.bot = new Telegraf(token);

    this.setupHandlers();
    this.bot.launch().catch((err) => console.error(err));
  }

  async sendNewApplication(app: Application) {
    const text =
      `<b>📄 Новая заявка #${app.id}</b>\n\n` +
      `👤 <b>ФИО:</b> ${app.surname} ${app.name} ${app.middleName}\n` +
      `📧 <b>Email:</b> ${app.email}\n` +
      `🎓 <b>Программа:</b> ${app.program}\n` +
      `⏳ <b>Статус:</b> PENDING`;

    await this.bot.telegram.sendMessage(this.adminChatId, text, {
      parse_mode: 'HTML',
      ...Markup.inlineKeyboard([
        [
          Markup.button.callback('✅ Принять', `upd_ACCEPTED_${app.id}`),
          Markup.button.callback('❌ Отклонить', `upd_REJECTED_${app.id}`),
        ],
      ]),
    });
  }

  private setupHandlers() {
    this.bot.action(/^upd_(ACCEPTED|REJECTED)_(\d+)$/, async (ctx) => {
      const match = ctx.match as RegExpExecArray;
      const status = match[1];
      const appId = parseInt(match[2], 10);

      if (ctx.from.id.toString() !== this.adminChatId) {
        return await ctx.answerCbQuery('Нет прав');
      }

      await ctx.answerCbQuery('Принято в обработку...').catch(() => {});

      const message = ctx.callbackQuery.message;
      let currentText = '';
      if (message && 'text' in message) {
        currentText = message.text;
      }

      const statusLabel = status === 'ACCEPTED' ? '✅ ПРИНЯТА' : '❌ ОТКЛОНЕНА';

      try {
        await Promise.race([
          this.applicationsService.updateStatus(appId, status),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Timeout')), 5000),
          ),
        ]);

        await ctx.editMessageText(
          `${currentText}\n\n<b>ИТОГ: ${statusLabel}</b>`,
          { parse_mode: 'HTML' },
        );
      } catch (error) {
        console.error('Update failed:', error);
        await ctx.reply(
          `❌ Ошибка БД при обновлении #${appId}. Проверьте соединение.`,
        );
      }
    });
  }
}
