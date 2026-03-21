import {
  Injectable,
  BadRequestException,
  Inject,
  forwardRef,
} from '@nestjs/common';
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

  private readonly memoryStore: Application[] = [];
  private nextId = 1;

  constructor(
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

    const exists = this.memoryStore.find(
      (app) =>
        app.surname === surname &&
        app.name === name &&
        app.middleName === middleName,
    );

    if (exists) {
      throw new BadRequestException('Application already exists');
    }

    const newApp: Application = {
      id: this.nextId++,
      surname,
      name,
      middleName,
      email: dto.email,
      program: trimmedProgram,
      message: dto.message ?? '',
      status: ApplicationStatus.PENDING,
      createdAt: new Date().toISOString(),
    };
    this.memoryStore.push(newApp);

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
      createdAt: newApp.createdAt,
    };
  }

  findAll() {
    return [...this.memoryStore].sort((a, b) => b.id - a.id);
  }

  getLast() {
    if (this.memoryStore.length === 0) return null;
    return this.memoryStore[this.memoryStore.length - 1] ?? null;
  }

  getStats() {
    const total = this.memoryStore.length;
    const pending = this.memoryStore.filter(
      (app) => app.status === ApplicationStatus.PENDING,
    ).length;
    const accepted = this.memoryStore.filter(
      (app) => app.status === ApplicationStatus.ACCEPTED,
    ).length;
    const rejected = this.memoryStore.filter(
      (app) => app.status === ApplicationStatus.REJECTED,
    ).length;
    return { total, pending, accepted, rejected };
  }

  async updateStatus(id: number, status: string) {
    const appId = Number(id);

    if (!Object.values(ApplicationStatus).includes(status as ApplicationStatus)) {
      throw new BadRequestException('Invalid status');
    }

    const app = this.memoryStore.find((item) => item.id === appId);

    if (!app) {
      throw new BadRequestException('Application not found');
    }

    app.status = status as ApplicationStatus;

    return app;
  }
}
