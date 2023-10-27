import { TaskRepository } from './../../repositories/task-repository';
import { Task } from './../../../domain/entities/tasks';
import { AppError } from '../../error/app-error';

interface IRequest {
  id: string;
}

interface IResponse {
  task: Task;
}

export class FindTaskByIdUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(data: IRequest): Promise<IResponse> {
    const task = await this.taskRepository.findById(data.id);

    if (!task) throw new AppError(400, 'Task not found');

    return {
      task,
    };
  }
}
