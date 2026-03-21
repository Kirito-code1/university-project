import { Column, Entity, PrimaryGeneratedColumn, Index } from 'typeorm';

export enum ApplicationStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

@Entity()
@Index(['surname', 'name', 'middleName'], { unique: true }) 
export class Application {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  surname!: string;

  @Column()
  name!: string;

  @Column()
  middleName!: string;

  @Column()
  email!: string;

  @Column()
  program!: string;

  @Column()
  message!: string;

  // In-memory mode uses ISO string timestamps.
  createdAt?: string;

  @Column({
    type: 'enum',
    enum: ApplicationStatus,
    default: ApplicationStatus.PENDING,
  })
  status!: ApplicationStatus;
}
