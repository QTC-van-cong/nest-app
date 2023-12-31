import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './quiz.controller';
import { Quiz } from './quiz.entity';
import { QuizService } from './quiz.service';

@Module({ controllers: [QuizController], providers: [QuizService], imports: [TypeOrmModule.forFeature([Quiz])] })
export class QuizModule {}
