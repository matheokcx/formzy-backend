import { Injectable } from '@nestjs/common';
import { CreateFormReplyDto } from './dto/create-form-reply.dto';
import { UpdateFormReplyDto } from './dto/update-form-reply.dto';

@Injectable()
export class FormReplyService {
  create(createFormReplyDto: CreateFormReplyDto) {
    console.log(createFormReplyDto);
    return 'This action adds a new formReply';
  }

  findAll() {
    return `This action returns all formReply`;
  }

  findOne(id: number) {
    return `This action returns a #${id} formReply`;
  }

  update(id: number, updateFormReplyDto: UpdateFormReplyDto) {
    console.log(updateFormReplyDto);
    return `This action updates a #${id} formReply`;
  }

  remove(id: number) {
    return `This action removes a #${id} formReply`;
  }
}
