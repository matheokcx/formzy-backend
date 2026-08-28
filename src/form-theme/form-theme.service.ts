import { Injectable } from '@nestjs/common';
import { CreateFormThemeDto } from './dto/create-form-theme.dto';
import { UpdateFormThemeDto } from './dto/update-form-theme.dto';

@Injectable()
export class FormThemeService {
  create(createFormThemeDto: CreateFormThemeDto) {
    console.log(createFormThemeDto);
    return 'This action adds a new formTheme';
  }

  findAll() {
    return `This action returns all formTheme`;
  }

  findOne(id: number) {
    return `This action returns a #${id} formTheme`;
  }

  update(id: number, updateFormThemeDto: UpdateFormThemeDto) {
    console.log(updateFormThemeDto);
    return `This action updates a #${id} formTheme`;
  }

  remove(id: number) {
    return `This action removes a #${id} formTheme`;
  }
}
