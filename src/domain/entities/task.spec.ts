import { expect, test } from 'vitest';
import { Task } from './tasks';

test('should create a task', () => {
  const task = Task.create({
    title: 'fazer o cafe da manha',
    completed: false,
    userId: '1234',
  });

  expect(task.id).toBeDefined();
  expect(task).toBeInstanceOf(Task);
});
