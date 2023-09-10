import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from 'src/dto/quiz.dto';

@Controller('quiz')
export class QuizController {
    constructor(private readonly quizService: QuizService) {}
  @Get('/')
  getAllQuiz() {
    return this.quizService.getAllQuiz();
  }

  @Get('/:id')
  getQuizById(@Param('id') id:number) {
    return this.quizService.getQuizById(id)
  }

  @Post('/create')
  async createQuiz(@Body() quizDto: CreateQuizDto){
    return await this.quizService.createQuiz(quizDto)
  }
}
