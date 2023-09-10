import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Question } from 'src/modules/question/question.entity';
import { Quiz } from 'src/modules/quiz/quiz.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456789',
  database: 'quiz',
  entities: [Quiz, Question],
  synchronize: true,
};
