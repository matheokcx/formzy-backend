import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { Form } from './entities/form.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form) private formsRepository: Repository<Form>,
    private userService: UserService,
  ) {}

  async create(createFormDto: CreateFormDto, user: any) {
    const currentUser: User | null = await this.userService.findOne(user.sub);

    if (!currentUser) {
      throw new UnauthorizedException();
    }

    const newForm: Form = this.formsRepository.create(createFormDto);
    newForm.user = currentUser;
    return await this.formsRepository.save(newForm);
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
