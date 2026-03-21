import { Controller, Post, Body, Get, Patch, Param } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/application-create.dto';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Get()
  getAll() {
    return this.applicationsService.findAll();
  }

  @Post('create')
  async create(@Body() dto: CreateApplicationDto) {
    return await this.applicationsService.create(dto);
  }

  @Patch(':id/status')
  async updateStatus(
    @Param('id') id: string,
    @Body() body: { status: string },
  ) {
    return await this.applicationsService.updateStatus(Number(id), body.status);
  }
}
