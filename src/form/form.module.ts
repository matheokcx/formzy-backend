import { Module } from '@nestjs/common';
import { FormService } from './form.service';
import { FormController } from './form.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Form } from './entities/form.entity';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [FormController],
  providers: [FormService],
  imports: [TypeOrmModule.forFeature([Form]), UserModule],
})
export class FormModule {}
