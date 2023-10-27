import { PrismaTaskRepository } from '../../../infrastructure/repositories/prisma/prisma-task-repository';
import { FindAllTaskUseCase } from '../../usecases/task/find-all-task-use-case';

export function makeFindAllTask() {
  const prismaTaskRepository = new PrismaTaskRepository()

  const findAllTaskUseCase = new FindAllTaskUseCase(prismaTaskRepository);

  return findAllTaskUseCase;
}
