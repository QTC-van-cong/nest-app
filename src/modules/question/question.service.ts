import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuestionDto } from "src/dto/question.dto";
import { Repository } from "typeorm";
import { Quiz } from "../quiz/quiz.entity";
import { Question } from "./question.entity";

@Injectable()
export class QuestionService{
  constructor(
    @InjectRepository(Question) private questionRepository: Repository<Question>,
  ) {}

    async createQuestion(questionDto: CreateQuestionDto, quiz: Quiz) {
      const newQuestion = await this.questionRepository.save({
        question: questionDto.question
      })

      quiz.questions = [newQuestion, ...quiz.questions];

      await quiz.save();
      return newQuestion;
    }
}