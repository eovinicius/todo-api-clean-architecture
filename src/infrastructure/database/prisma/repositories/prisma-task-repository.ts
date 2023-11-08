import { TaskRepository } from '../../../../application/repositories/task-repository';
import { Task } from '../../../../domain/entities/tasks';
import { PrismaTaskMapper } from '../mappers/prisma-task-mapper';
import { prisma } from '../prisma-client';

export class PrismaTaskRepository implements TaskRepository {
  async create(task: Task): Promise<void> {
    const data = PrismaTaskMapper.ToPrisma(task);
    await prisma.task.create({ data });
  }

  async findAll(): Promise<Task[]> {
    const tasks = await prisma.task.findMany();

    return tasks.map(PrismaTaskMapper.ToDomain);
  }

  async findById(id: string): Promise<Task | null> {
    const result = await prisma.task.findUnique({ where: { id } });

    if (!result) return null;

    return PrismaTaskMapper.ToDomain(result);
  }

  async save(task: Task): Promise<void> {
    const data = PrismaTaskMapper.ToPrisma(task);
    await prisma.task.update({ where: { id: data.id }, data });
  }

  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
