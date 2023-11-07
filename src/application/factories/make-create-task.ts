import { PrismaTaskRepository } from '../../infrastructure/database/prisma/repositories/prisma-task-repository';
import { PrismaUserRepository } from '../../infrastructure/database/prisma/repositories/prisma-user-repository';
import { CreateTaskUseCase } from '../use-cases/create-task-use-case';

export function makeCreateTask() {
  const prismaTaskRepository = new PrismaTaskRepository();
  const prismaUserRepository = new PrismaUserRepository();

  const createTaskUseCase = new CreateTaskUseCase(prismaUserRepository, prismaTaskRepository);

  return createTaskUseCase;
}
