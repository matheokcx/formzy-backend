import {
  IsBoolean,
  IsDefined,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  MaxLength,
} from 'class-validator';

export class CreateFormDto {
  @IsNotEmpty()
  @MaxLength(150)
  name: string;

  @IsOptional()
  @MaxLength(255)
  description: string;

  @IsDefined()
  @IsJSON()
  fields: Record<string, any>;

  @IsDefined()
  @IsBoolean()
  isPrivate: boolean;
}
