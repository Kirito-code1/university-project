import { Controller, Post, Body } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/application-create.dto';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post('create')
  async create(@Body() dto: CreateApplicationDto) {
    return await this.applicationsService.create(dto);
  }
}
