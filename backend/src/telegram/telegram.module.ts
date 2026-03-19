import { Module, forwardRef } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TelegramService } from './telegram.service';
import { ApplicationsModule } from '../applications/applications.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'env',
    }),
    forwardRef(() => ApplicationsModule),
  ],
  providers: [TelegramService],
  exports: [TelegramService],
})
export class TelegramModule {}
