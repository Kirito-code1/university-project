import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST') || 'localhost',
        port: Number(configService.get<number>('DB_PORT')) || 5432,
        username: configService.get<string>('DB_USER') || 'postgres',
        password: String(configService.get<string>('DB_PASS') || 'password'),
        database: configService.get<string>('DB_NAME') || 'university_db',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
