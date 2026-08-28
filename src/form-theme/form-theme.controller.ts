import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FormThemeService } from './form-theme.service';
import { CreateFormThemeDto } from './dto/create-form-theme.dto';
import { UpdateFormThemeDto } from './dto/update-form-theme.dto';

@Controller('form-theme')
export class FormThemeController {
  constructor(private readonly formThemeService: FormThemeService) {}

  @Post()
  create(@Body() createFormThemeDto: CreateFormThemeDto) {
    return this.formThemeService.create(createFormThemeDto);
  }

  @Get()
  findAll() {
    return this.formThemeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formThemeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFormThemeDto: UpdateFormThemeDto,
  ) {
    return this.formThemeService.update(+id, updateFormThemeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formThemeService.remove(+id);
  }
}
