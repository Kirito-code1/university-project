import {
  Injectable,
  BadRequestException,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application, ApplicationStatus } from './entity/application.entity';
import { CreateApplicationDto } from './dto/application-create.dto';
import { TelegramService } from '../telegram/telegram.service';

@Injectable()
export class ApplicationsService {
  private readonly allowedPrograms = [
    'Information Technologies',
    'Business & Management',
    'Natural Sciences',
    'Medicine & Health',
    'Law & Governance',
    'Arts & Humanities',
  ];

  constructor(
    @InjectRepository(Application)
    private readonly applicationRepository: Repository<Application>,
    @Inject(forwardRef(() => TelegramService))
    private readonly telegramService: TelegramService,
  ) {}

  async create(dto: CreateApplicationDto) {
    const trimmedProgram = dto.program.trim();
    if (!this.allowedPrograms.includes(trimmedProgram)) {
      throw new BadRequestException(
        'Invalid program. Allowed: ' + this.allowedPrograms.join(', '),
      );
    }

    const nameParts = dto.fullName.trim().split(/\s+/);
    const surname = nameParts[0] || '';
    const name = nameParts[1] || '';
    const middleName = nameParts.slice(2).join(' ') || '';

    if (!surname || !name) {
      throw new BadRequestException('Provide at least Surname and Name');
    }

    const exists = await this.applicationRepository.findOne({
      where: { surname, name, middleName },
    });

    if (exists) {
      throw new BadRequestException('Application already exists');
    }

    let newApp: Application;
    try {
      newApp = await this.applicationRepository.save({
        surname,
        name,
        middleName,
        email: dto.email,
        program: trimmedProgram,
        message: dto.message,
        status: ApplicationStatus.PENDING, // <-- правильный импорт из entity
      });
    } catch (err) {
      console.error('Failed to save application:', err);
      throw new BadRequestException('Database error');
    }

    try {
      await this.telegramService.sendNewApplication(newApp);
    } catch (error) {
      console.error(
        'Telegram notification failed:',
        error instanceof Error ? error.message : error,
      );
    }

    return {
      message: 'Application successfully created',
      id: newApp.id,
      surname: newApp.surname,
      name: newApp.name,
      middleName: newApp.middleName,
      email: newApp.email,
      program: newApp.program,
      messageText: newApp.message,
      status: newApp.status,
    };
  }

  async updateStatus(id: number, status: string) {
    const appId = Number(id);

    const app = await this.applicationRepository.findOne({
      where: { id: appId },
    });

    if (!app) {
      throw new BadRequestException('Application not found');
    }

    app.status = status as ApplicationStatus;

    return await this.applicationRepository.save(app, { reload: true });
  }
}

