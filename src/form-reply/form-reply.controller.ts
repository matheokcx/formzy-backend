import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FormReplyService } from './form-reply.service';
import { CreateFormReplyDto } from './dto/create-form-reply.dto';
import { UpdateFormReplyDto } from './dto/update-form-reply.dto';

@Controller('form-reply')
export class FormReplyController {
  constructor(private readonly formReplyService: FormReplyService) {}

  @Post()
  create(@Body() createFormReplyDto: CreateFormReplyDto) {
    return this.formReplyService.create(createFormReplyDto);
  }

  @Get()
  findAll() {
    return this.formReplyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formReplyService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFormReplyDto: UpdateFormReplyDto,
  ) {
    return this.formReplyService.update(+id, updateFormReplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formReplyService.remove(+id);
  }
}
