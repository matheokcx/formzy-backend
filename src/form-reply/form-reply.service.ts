import {
  ConflictException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { createHmac } from 'node:crypto';
import { CreateFormReplyDto } from './dto/create-form-reply.dto';
import { UpdateFormReplyDto } from './dto/update-form-reply.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { FormReply } from './entities/form-reply.entity';

@Injectable()
export class FormReplyService {
  constructor(
    @InjectRepository(FormReply)
    private formRepliesRepository: Repository<FormReply>,
    private configService: ConfigService,
  ) {}

  private hashIp(ipAddress: string): string {
    const secret: string | undefined = this.configService.get('IP_HASH_SECRET');

    if (!secret) {
      throw new InternalServerErrorException(
        'Configuration incomplète: IP_HASH_SECRET manquant',
      );
    }

    return createHmac('sha256', secret).update(ipAddress).digest('hex');
  }

  async create(
    createFormReplyDto: CreateFormReplyDto,
    ipAddress: string,
  ): Promise<FormReply> {
    const ipHash: string = this.hashIp(ipAddress);
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

  async update(
    id: number,
    updateFormReplyDto: UpdateFormReplyDto,
    ipAddress: string,
  ) {
    const reply: FormReply | null = await this.formRepliesRepository.findOne({
      where: { id },
      select: { id: true, ipHash: true },
    });

    if (!reply) {
      throw new NotFoundException("Cette réponse n'existe pas.");
    }

    if (reply.ipHash !== this.hashIp(ipAddress)) {
      throw new ForbiddenException(
        "Vous ne pouvez pas modifier une réponse qui n'est pas la vôtre.",
      );
    }

    return await this.formRepliesRepository.update(id, {
      replies: updateFormReplyDto.replies,
    });
  }

  async remove(id: number): Promise<void> {
    await this.formRepliesRepository.delete(id);
  }
}
