import { PrismaTaskRepository } from '../../infrastructure/database/prisma/repositories/prisma-task-repository';
import { UpdateTaskUseCase } from '../use-cases/update-task-use-case';

export function makeUpdateTask() {
  const prismaTaskRepository = new PrismaTaskRepository();

  const updateTaskUseCase = new UpdateTaskUseCase(prismaTaskRepository);

  return updateTaskUseCase;
}
