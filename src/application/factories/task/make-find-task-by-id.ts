import { PrismaTaskRepository } from '../../../infrastructure/repositories/prisma/prisma-task-repository';
import { FindTaskByIdUseCase } from '../../usecases/task/find-task-by-id-use-case';

export function makeFindTaskById() {
  const prismaTaskRepository = new PrismaTaskRepository();

  const findTaskByIdUseCase = new FindTaskByIdUseCase(prismaTaskRepository);

  return findTaskByIdUseCase;
}
