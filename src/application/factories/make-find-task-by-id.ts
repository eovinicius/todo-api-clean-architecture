import { PrismaTaskRepository } from '../../infrastructure/database/prisma/repositories/prisma-task-repository';
import { FindTaskByIdUseCase } from '../use-cases/find-task-by-id-use-case';

export function makeFindTaskById() {
  const prismaTaskRepository = new PrismaTaskRepository();

  const findTaskByIdUseCase = new FindTaskByIdUseCase(prismaTaskRepository);

  return findTaskByIdUseCase;
}
