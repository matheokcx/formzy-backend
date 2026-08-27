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

  @Column()
  ipHash: string;

  @Column('jsonb')
  replies: any;

  @ManyToOne(() => Form, (form) => form.formReplies)
  form: Form;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
