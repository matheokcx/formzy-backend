import { IsDefined, IsJSON, IsNumber, IsPositive } from 'class-validator';

export class CreateFormReplyDto {
  @IsDefined()
  @IsJSON()
  replies: string;

  @IsDefined()
  @IsNumber()
  @IsPositive()
  formId: number;
}
