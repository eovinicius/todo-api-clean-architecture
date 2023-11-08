import { TaskRepository } from '../repositories/task-repository';
import { Task } from '../../domain/entities/tasks';
import { AppError } from '../error/app-error';

interface FindTaskByIdUseCaseRequest {
  id: string;
}

interface FindTaskByIdUseCaseResponse {
  task: Task;
}

export class FindTaskByIdUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(data: FindTaskByIdUseCaseRequest): Promise<FindTaskByIdUseCaseResponse> {
    const task = await this.taskRepository.findById(data.id);

    if (!task) throw new AppError(400, 'Task not found');

    return {
      task,
    };
  }
}
