import { PrismaTaskRepository } from '../../infrastructure/database/prisma/repositories/prisma-task-repository';
import { FindAllTaskUseCase } from '../use-cases/find-all-task-use-case';

export function makeFindAllTask() {
  const prismaTaskRepository = new PrismaTaskRepository();

  const findAllTaskUseCase = new FindAllTaskUseCase(prismaTaskRepository);

  return findAllTaskUseCase;
}
