import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Form } from '../../form/entities/form.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class FormTheme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  primaryColor: string;

  @Column({ nullable: true })
  secondaryColor: string;

  @Column({ nullable: true })
  font: string;

  @Column({ nullable: true })
  ctaText: string;

  @OneToMany(() => Form, (form) => form.formTheme)
  forms: Form[];

  @ManyToOne(() => User, (user) => user.formThemes)
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
