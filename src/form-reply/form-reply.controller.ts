import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Ip,
} from '@nestjs/common';
import { FormReplyService } from './form-reply.service';
import { CreateFormReplyDto } from './dto/create-form-reply.dto';
import { UpdateFormReplyDto } from './dto/update-form-reply.dto';
import { Public } from '../auth/auth.guard';

@Controller('form-reply')
export class FormReplyController {
  constructor(private readonly formReplyService: FormReplyService) {}

  @Post()
  @Public()
  create(
    @Ip() ipAddress: string,
    @Body() createFormReplyDto: CreateFormReplyDto,
  ) {
    return this.formReplyService.create(createFormReplyDto, ipAddress);
  }

  @Get('form/:id')
  findAll(@Param('id') id: string, @Query('page') page: string | undefined) {
    return this.formReplyService.findAllForForm(
      Number(id),
      page ? Number(page) : 1,
    );
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
}
