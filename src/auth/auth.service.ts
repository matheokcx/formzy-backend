import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from './dto/signup.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user: User | null = await this.usersService.findOneForLogin(
      dto.email,
    );
    const hashedPassword: boolean = await bcrypt.compare(
      dto.password,
      user?.password ?? '',
    );

    if (!user || !hashedPassword) {
      throw new UnauthorizedException();
    }

    const payload = {
      id: user.id,
      fullName: user.fullName,
    };

    return {
      token: await this.jwtService.signAsync(payload),
    };
  }

  async signup(dto: SignupDto) {
    const hashedPassword: string = await bcrypt.hash(dto.password, 10);
    const { password, ...newUser }: User = await this.usersService.create({
      ...dto,
      password: hashedPassword,
    });

    return newUser;
  }

  async getProfile(id: number) {
    const user: User | null = await this.usersService.findOne(id);

    if (!user) {
      throw new UnauthorizedException();
    }

    const { password, ...profile } = user;
    return profile;
  }
}
