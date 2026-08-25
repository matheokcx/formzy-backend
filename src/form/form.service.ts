import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { Form } from './entities/form.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form) private formsRepository: Repository<Form>,
  ) {}

  async create(createFormDto: CreateFormDto) {
    const newForm: Form = this.formsRepository.create(createFormDto);
    await this.formsRepository.save(newForm);
  }

  async findAll(): Promise<Form[]> {
    return await this.formsRepository.find();
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
