import { describe, it, expect, beforeEach } from 'vitest';
import { CreateTaskUseCase } from './create-task-use-case';
import { AppError } from '../error/app-error';
import { InMemoryUserRepository } from '../../test/repositories/in-memory-user-repository';
import { InMemoryTaskRepository } from '../../test/repositories/in-memory-task-repository';

let userRepository: InMemoryUserRepository;
let taskRepository: InMemoryTaskRepository;
let sut: CreateTaskUseCase;

describe(' Create task use case', () => {
  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    taskRepository = new InMemoryTaskRepository();
    sut = new CreateTaskUseCase(userRepository, taskRepository);
  });

  it('should be able to register a task', async () => {
    userRepository.items.push({
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password_test',
      createdAt: new Date(),
    });

    const task = await sut.execute({
      title: 'title test',
      userId: '1',
    });

    expect(task.createdAt).toEqual(expect.any(Date));
  });

  it('should not be possible to create a task with a non-existent id', async () => {
    await expect(
      sut.execute({
        title: 'title test',
        userId: '1',
      }),
    ).rejects.toThrowError(AppError);
  });

  it('should not be possible to create a task with a non-existent user', async () => {
    await expect(
      sut.execute({
        title: 'title test',
        userId: '1',
      }),
    ).rejects.toThrowError(AppError);
  });
});
