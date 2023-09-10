import { Module } from '@nestjs/common';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './question.entity';
import { QuizService } from '../quiz/quiz.service';
import { Quiz } from '../quiz/quiz.entity';

@Module({ controllers: [QuestionController], providers: [QuestionService, QuizService], imports: [TypeOrmModule.forFeature([Question, Quiz])] })
export class QuestionModule {}
