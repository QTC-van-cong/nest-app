import { Body, Controller, Post } from '@nestjs/common';
import { CreateQuestionDto } from 'src/dto/question.dto';
import { QuestionService } from './question.service';
import { Question } from './question.entity';
import { QuizService } from '../quiz/quiz.service';

@Controller('question')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
  ) {}


  @Post('')
  async saveQuestion(
    @Body() questionDto: CreateQuestionDto,
  ): Promise<Question> {
    console.log('questionDto', questionDto);
    const quiz = await this.quizService.getQuizById(questionDto.quizId)
    console.log("quiz: ", quiz);
    
    return await this.questionService.createQuestion(questionDto, quiz);
  }
}
