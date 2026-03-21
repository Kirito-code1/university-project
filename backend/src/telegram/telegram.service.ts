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
    const token = (
      this.configService.get<string>('TELEGRAM_BOT_TOKEN') ?? ''
    ).trim();
    const chatIdRaw = (
      this.configService.get<string>('TELEGRAM_ADMIN_CHAT_ID') ?? ''
    ).trim();

    if (!token) {
      throw new Error('TELEGRAM_BOT_TOKEN is missing');
    }

    const tokenId = token.split(':')[0];
    const isValidChatId =
      !!chatIdRaw &&
      !chatIdRaw.includes(':') &&
      /^-?\d+$/.test(chatIdRaw) &&
      chatIdRaw !== tokenId;
    if (!isValidChatId && chatIdRaw) {
      console.warn(
        'Invalid TELEGRAM_ADMIN_CHAT_ID. It should be a numeric chat id (not the bot id).',
      );
    }

    this.adminChatId = isValidChatId ? chatIdRaw : '';
    this.bot = new Telegraf(token);

    this.setupHandlers();
    this.bot
      .launch()
      .then(() => {
        if (this.adminChatId) {
          console.log(
            'Telegram bot started. Admin chat id:',
            this.adminChatId,
          );
        } else {
          console.log(
            'Telegram bot started. Admin chat id is not set. Send /start to set it.',
          );
        }
      })
      .catch((err) => console.error(err));
  }

  async sendNewApplication(app: Application) {
    if (!this.adminChatId) {
      console.error(
        'Admin chat id is not set. Send /start to the bot and set TELEGRAM_ADMIN_CHAT_ID.',
      );
      return;
    }

    const createdAt = app.createdAt
      ? new Date(app.createdAt).toLocaleString('ru-RU')
      : '—';
    const messageText = app.message?.trim() ? app.message.trim() : '—';

    const text =
      `<b>📄 Новая заявка #${app.id}</b>\n\n` +
      `👤 <b>ФИО:</b> ${app.surname} ${app.name} ${app.middleName}\n` +
      `📧 <b>Email:</b> ${app.email}\n` +
      `🎓 <b>Программа:</b> ${app.program}\n` +
      `🕒 <b>Время:</b> ${createdAt}\n` +
      `💬 <b>Сообщение:</b> ${messageText}\n` +
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
    this.bot.start(async (ctx) => {
      const chatId = String(ctx.chat?.id ?? ctx.from?.id ?? '');
      if (chatId) {
        console.log('Telegram /start chat id:', chatId);
        if (!this.adminChatId) {
          this.adminChatId = chatId;
          console.log('Admin chat id set from /start:', chatId);
        }
      }
      await ctx.reply(
        `Бот активирован. Ваш chat id: ${chatId || 'unknown'}`,
      );
    });

    this.bot.command('chatid', async (ctx) => {
      const chatId = String(ctx.chat?.id ?? ctx.from?.id ?? '');
      await ctx.reply(`chat id: ${chatId}`);
    });

    this.bot.command('stats', async (ctx) => {
      const stats = this.applicationsService.getStats();
      await ctx.reply(
        `📊 Статистика\n\nВсего: ${stats.total}\nОжидают: ${stats.pending}\nПринято: ${stats.accepted}\nОтклонено: ${stats.rejected}`,
      );
    });

    this.bot.command('last', async (ctx) => {
      const last = this.applicationsService.getLast();
      if (!last) {
        await ctx.reply('Пока заявок нет.');
        return;
      }
      const createdAt = last.createdAt
        ? new Date(last.createdAt).toLocaleString('ru-RU')
        : '—';
      const messageText = last.message?.trim() ? last.message.trim() : '—';
      await ctx.reply(
        `Последняя заявка #${last.id}\nФИО: ${last.surname} ${last.name} ${last.middleName}\nEmail: ${last.email}\nПрограмма: ${last.program}\nВремя: ${createdAt}\nСообщение: ${messageText}\nСтатус: ${last.status}`,
      );
    });

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
          `❌ Ошибка при обновлении заявки #${appId}. Проверьте доступ к сервису.`,
        );
      }
    });
  }
}
