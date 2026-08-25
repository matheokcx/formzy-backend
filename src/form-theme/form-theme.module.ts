import { Module } from '@nestjs/common';
import { FormThemeService } from './form-theme.service';
import { FormThemeController } from './form-theme.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormTheme } from './entities/form-theme.entity';

@Module({
  controllers: [FormThemeController],
  providers: [FormThemeService],
  imports: [TypeOrmModule.forFeature([FormTheme])],
})
export class FormThemeModule {}
