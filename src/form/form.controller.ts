import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Query,
} from '@nestjs/common';
import { FormService } from './form.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { Public } from '../auth/auth.guard';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  create(
    @Request() request: { user: { id: number } },
    @Body() createFormDto: CreateFormDto,
  ) {
    return this.formService.create(createFormDto, request.user);
  }

  @Get()
  findAll(@Query('page') page: string | undefined) {
    return this.formService.findAll(page ? Number(page) : 1);
  }

  @Get('/user/:id')
  findAllUser(
    @Param('id') id: string,
    @Query('page') page: string | undefined,
  ) {
    return this.formService.findUserForms(Number(id), page ? Number(page) : 1);
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string) {
    return this.formService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormDto: UpdateFormDto) {
    return this.formService.update(+id, updateFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formService.remove(+id);
  }
}
