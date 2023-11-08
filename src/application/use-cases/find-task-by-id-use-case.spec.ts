import { describe, it, expect, beforeEach } from 'vitest';
import { Task } from '../../domain/entities/tasks';
import { FindTaskByIdUseCase } from './find-task-by-id-use-case';
import { InMemoryUserRepository } from '../../test/repositories/in-memory-user-repository';
import { InMemoryTaskRepository } from '../../test/repositories/in-memory-task-repository';

let userRepository: InMemoryUserRepository;
let taskRepository: InMemoryTaskRepository;
let sut: FindTaskByIdUseCase;

describe('FindTaskByIdUseCase', () => {
  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    taskRepository = new InMemoryTaskRepository();
    sut = new FindTaskByIdUseCase(taskRepository);
  });

  it('should find a task by id', async () => {
    const task1 = new Task({
      title: 'i have to go to the gym',
      userId: '1',
    });

    taskRepository.item.push(task1);

    const { task } = await sut.execute({ id: task1.id });

    expect(task).toEqual(task1);
  });

  it('should handle the scenario where the task is not found', async () => {
    // TODO
  });
});
