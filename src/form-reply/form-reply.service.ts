import { ConflictException, Injectable } from '@nestjs/common';
import { CreateFormReplyDto } from './dto/create-form-reply.dto';
import { UpdateFormReplyDto } from './dto/update-form-reply.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FormReply } from './entities/form-reply.entity';

@Injectable()
export class FormReplyService {
  constructor(
    @InjectRepository(FormReply)
    private formRepliesRepository: Repository<FormReply>,
  ) {}

  async create(
    createFormReplyDto: CreateFormReplyDto,
    ipAddress: string,
  ): Promise<FormReply> {
    const ipHash: string = `${ipAddress}`;
    const hasAlreadyReplied: FormReply | null =
      await this.formRepliesRepository.findOneBy({
        form: { id: createFormReplyDto.formId },
        ipHash: ipHash,
      });

    if (hasAlreadyReplied) {
      throw new ConflictException('Vous avez déjà répondu à ce formulaire.');
    }

    const newReply: FormReply = this.formRepliesRepository.create({
      ...createFormReplyDto,
      ipHash,
      form: { id: createFormReplyDto.formId },
    });
    return await this.formRepliesRepository.save(newReply);
  }

  async findAllForForm(formId: number, page: number): Promise<FormReply[]> {
    return await this.formRepliesRepository
      .createQueryBuilder('formReply')
      .leftJoin('formReply.form', 'form')
      .where('form.id = :id', { id: formId })
      .limit(20)
      .offset(15 * (page - 1))
      .getMany();
  }

  async findOne(id: number): Promise<FormReply | null> {
    return this.formRepliesRepository.findOneBy({ id });
  }

  async update(id: number, updateFormReplyDto: UpdateFormReplyDto) {
    await this.formRepliesRepository.update(id, updateFormReplyDto);
  }
}
