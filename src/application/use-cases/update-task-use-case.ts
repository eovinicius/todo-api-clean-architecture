import { AppError } from '../error/app-error';
import { TaskRepository } from '../repositories/task-repository';

interface UpdateTaskUseCaseRequest {
  userId: string;
  title: string;
}

interface UpdateTaskUseCaseResponse {}

export class UpdateTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute({ userId, title }: UpdateTaskUseCaseRequest): Promise<UpdateTaskUseCaseResponse> {
    const task = await this.taskRepository.findById(userId);

    if (!task) throw new AppError(400, 'task not found');

    task.title = title;

    await this.taskRepository.save(task);

    return {};
  }
}
