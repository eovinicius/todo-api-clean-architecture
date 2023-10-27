import { TaskRepository } from '../../../application/repositories/task-repository';
import { Task } from '../../../domain/entities/tasks';
import { prisma } from '../../database/prisma-client';

export class PrismaTaskRepository implements TaskRepository {
  async create(task: Task): Promise<Task> {
    await prisma.task.create({ data: task });

    return task;
  }
  async findAll(): Promise<Task[]> {
    const tasks = await prisma.task.findMany();

    return tasks;
  }
  async findById(id: string): Promise<Task | null> {
    const task = await prisma.task.findUnique({ where: { id } });

    return task;
  }
  async update(data: Task): Promise<void> {
    await prisma.task.update({ where: { id: data.id }, data });
  }
  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
