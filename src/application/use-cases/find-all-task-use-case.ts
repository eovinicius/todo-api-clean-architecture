import { Task } from '../../domain/entities/tasks';
import { TaskRepository } from '../repositories/task-repository';

export class FindAllTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(): Promise<Task[]> {
    const tasks = await this.taskRepository.findAll();

    return tasks;
  }
}
