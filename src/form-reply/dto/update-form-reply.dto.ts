import { PartialType } from '@nestjs/mapped-types';
import { CreateFormReplyDto } from './create-form-reply.dto';

export class UpdateFormReplyDto extends PartialType(CreateFormReplyDto) {}
