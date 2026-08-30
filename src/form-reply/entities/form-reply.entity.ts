import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Form } from '../../form/entities/form.entity';

@Entity()
export class FormReply {
  @PrimaryGeneratedColumn()
  id: number;

  @Exclude()
  @Column({ select: false })
  ipHash: string;

  @Column('jsonb')
  replies: string;

  @ManyToOne(() => Form, (form) => form.formReplies)
  form: Form;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
