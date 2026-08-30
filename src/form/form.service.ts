import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { Form } from './entities/form.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form) private formsRepository: Repository<Form>,
    private userService: UserService,
  ) {}

  async create(createFormDto: CreateFormDto, user: { id: number }) {
    const newForm: Form = this.formsRepository.create({
      ...createFormDto,
      user: { id: user.id },
    });
    return await this.formsRepository.save(newForm);
  }

  async findAll(page: number): Promise<Form[]> {
    return await this.formsRepository
      .createQueryBuilder('form')
      .leftJoinAndSelect('form.user', 'user')
      .leftJoinAndSelect('form.formTheme', 'formTheme')
      .limit(20)
      .offset(20 * (page - 1))
      .getMany();
  }

  async findUserForms(id: number, page: number): Promise<Form[]> {
    return await this.formsRepository
      .createQueryBuilder('form')
      .leftJoinAndSelect('form.user', 'user')
      .leftJoinAndSelect('form.formTheme', 'formTheme')
      .leftJoinAndSelect('form.formReplies', 'formReplies')
      .where('user.id = :id', { id })
      .limit(15)
      .offset(15 * (page - 1))
      .getMany();
  }

  async findOne(id: number): Promise<Form | null> {
    return await this.formsRepository.findOne({ where: { id } });
  }

  async update(id: number, updateFormDto: UpdateFormDto): Promise<void> {
    await this.formsRepository.update(id, updateFormDto);
  }

  async remove(id: number): Promise<void> {
    await this.formsRepository.delete(id);
  }
}
