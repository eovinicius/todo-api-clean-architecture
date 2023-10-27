import { PrismaTaskRepository } from '../../../infrastructure/repositories/prisma/prisma-task-repository';
import { UpdateTaskUseCase } from '../../usecases/task/update-task-use-case';

export function makeUpdateTask() {
  const prismaTaskRepository = new PrismaTaskRepository();

  const updateTaskUseCase = new UpdateTaskUseCase(prismaTaskRepository);

  return updateTaskUseCase;
}
