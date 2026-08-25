import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { FormTheme } from '../../form-theme/entities/form-theme.entity';
import { FormReply } from '../../form-reply/entities/form-reply.entity';

@Entity()
export class Form {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column('simple-json')
  fields: any;

  @Column()
  isPrivate: boolean;

  @Column({ default: false })
  isClosed: boolean;

  @ManyToOne(() => User, (user) => user.forms)
  user: User;

  @ManyToOne(() => FormTheme, (formTheme) => formTheme.forms, {
    nullable: true,
  })
  formTheme: FormTheme;

  @OneToMany(() => FormReply, (formReply) => formReply.form)
  formReplies: FormReply[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
