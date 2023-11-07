import { AppError } from '../error/app-error';
import { TaskRepository } from '../repositories/task-repository';

interface IRequest {
  id: string;
  title: string;
  completed: boolean;
}

export class UpdateTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(data: IRequest): Promise<void> {
    const taskAlreadyExists = await this.taskRepository.findById(data.id);

    if (!taskAlreadyExists) throw new AppError(400, 'task not found');

    const { id, title = taskAlreadyExists.title, completed = taskAlreadyExists.completed } = data;

    await this.taskRepository.update({
      id,
      title,
      completed,
    });
  }
}
