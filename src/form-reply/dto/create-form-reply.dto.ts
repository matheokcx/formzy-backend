import { IsDefined, IsJSON, IsNumber, IsPositive } from 'class-validator';

export class CreateFormReplyDto {
  @IsDefined()
  @IsJSON()
  replies: any;

  @IsDefined()
  @IsNumber()
  @IsPositive()
  formId: number;
}
