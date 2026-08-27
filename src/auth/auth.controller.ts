import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Public } from './auth.guard';
import { User } from '../user/entities/user.entity';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @Public()
  signUp(@Body() signUpDto: SignupDto) {
    return this.authService.signup(signUpDto);
  }

  @Post('login')
  @Public()
  @HttpCode(HttpStatus.OK)
  signIn(@Body() signInDto: LoginDto) {
    return this.authService.login(signInDto);
  }

  @Get('profile')
  getProfile(@Request() request: { user: User }) {
    return request.user;
  }
}
