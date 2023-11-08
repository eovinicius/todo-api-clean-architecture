import { AppError } from '../error/app-error';
import { TaskRepository } from '../repositories/task-repository';

interface UpdateTaskUseCaseRequest {
  UserId: string;
  title: string;
}

interface UpdateTaskUseCaseResponse {}

export class UpdateTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute({ UserId, title }: UpdateTaskUseCaseRequest): Promise<UpdateTaskUseCaseResponse> {
    const task = await this.taskRepository.findById(UserId);

    if (!task) throw new AppError(400, 'task not found');

    task.title = title;

    await this.taskRepository.save(task);

    return {};
  }
}
