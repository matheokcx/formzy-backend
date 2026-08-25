import { Module } from '@nestjs/common';
import { FormReplyService } from './form-reply.service';
import { FormReplyController } from './form-reply.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormReply } from './entities/form-reply.entity';

@Module({
  controllers: [FormReplyController],
  providers: [FormReplyService],
  imports: [TypeOrmModule.forFeature([FormReply])],
})
export class FormReplyModule {}
