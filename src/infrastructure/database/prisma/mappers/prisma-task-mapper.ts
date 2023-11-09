import { Task as PrismaTask, Prisma } from '@prisma/client';
import { Task } from '../../../../domain/entities/tasks';

export class PrismaTaskMapper {
  public static ToDomain(task: PrismaTask): Task {
    return Task.create({
      title: task.title,
      userId: task.userId,
      completed: task.completed,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,
    }, task.id);
  }

  public static ToPrisma(task: Task): Prisma.TaskUncheckedCreateInput {
    return {
      id: task.id,
      title: task.title,
      completed: task.completed,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,
      userId: task.userId,
    };
  }
}
