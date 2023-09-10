import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from 'src/dto/quiz.dto';
import { DataSource, Repository } from 'typeorm';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private quizRepository: Repository<Quiz>,
    private dataSource: DataSource
  ) {}

  getAllQuiz() {
    return [1, 2, 3, 534534];
  }

  async getQuizById(id: number) {
    const quiz = await this.dataSource
    .getRepository(Quiz)
    .createQueryBuilder("quiz")
    .leftJoinAndSelect("quiz.questions", "question")
    .where("quiz.id = :id", {id: id})
    .getOne()
    console.log('quiz: ', quiz);

    return quiz;
  }

  async createQuiz(quizDto: CreateQuizDto) {
    return await this.quizRepository.save(quizDto);
  }
}
