import { PartialType } from '@nestjs/mapped-types';
import { CreateFormThemeDto } from './create-form-theme.dto';

export class UpdateFormThemeDto extends PartialType(CreateFormThemeDto) {}
