import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsOptional,
  MinLength,
} from 'class-validator';

export class CreateApplicationDto {
  @IsString()
  @IsNotEmpty({ message: 'ФИО обязательно' })
  @MinLength(5, { message: 'Введите полное имя и фамилию' })
  fullName!: string;

  @IsEmail({}, { message: 'Некорректный формат Email' })
  @IsNotEmpty({ message: 'Email обязателен' })
  email!: string;

  @IsString()
  @IsNotEmpty({ message: 'Необходимо выбрать программу обучения' })
  program!: string;

  @IsString()
  @IsOptional()
  @MinLength(10, { message: 'Сообщение должно быть содержательным' })
  message?: string;
}
