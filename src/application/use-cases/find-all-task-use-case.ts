import { Task } from '../../domain/entities/tasks';
import { TaskRepository } from '../repositories/task-repository';

interface FindAllTaskUseCaseResponse {
  tasks: Task[];
}

export class FindAllTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(): Promise<FindAllTaskUseCaseResponse> {
    const tasks = await this.taskRepository.findAll();

    return {
      tasks,
    };
  }
}
