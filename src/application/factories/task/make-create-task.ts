import { CreateTaskUseCase } from '../../usecases/task/create-task-use-case';
import { PrismaTaskRepository } from '../../../infrastructure/repositories/prisma/prisma-task-repository';
import { PrismaUserRepository } from '../../../infrastructure/repositories/prisma/prisma-user-repository';

export function makeCreateTask() {
  const prismaTaskRepository = new PrismaTaskRepository();
  const prismaUserRepository = new PrismaUserRepository();

  const createTaskUseCase = new CreateTaskUseCase(prismaUserRepository, prismaTaskRepository);

  return createTaskUseCase;
}
