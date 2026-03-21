import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config({ path: join(process.cwd(), '.env') });

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: true });

  console.log('--- CHECK ENV ---');
  console.log('TOKEN EXISTS:', !!process.env.TELEGRAM_BOT_TOKEN);
  console.log('-----------------');

  await app.listen(3000);
}
bootstrap();
