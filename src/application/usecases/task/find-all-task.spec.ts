import { describe, it, expect } from 'vitest';
import { InMemoryTaskRepository } from '../../../infrastructure/repositories/in-memory/in-memory-task-repository';
import { FindAllTaskUseCase } from './find-all-task-use-case';
import { Task } from '../../../domain/entities/tasks';

describe('Find All Task UseCase', () => {
  let taskRepository = new InMemoryTaskRepository();
  let sut = new FindAllTaskUseCase(taskRepository);

  it('should return a list of tasks', async () => {
    const task1 = new Task({
      title: 'i have to go to the gym',
      userId: '1',
    });

    taskRepository.item.push(task1);

    const tasks = await sut.execute();

    expect(tasks).toBeInstanceOf(Array);
    expect(tasks.length).toBeGreaterThan(0);
  });
});
