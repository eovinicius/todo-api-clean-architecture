import { AppError } from '../error/app-error';
import { UserRepository } from '../repositories/user-repository';
import { Task } from '../../domain/entities/tasks';
import { TaskRepository } from '../repositories/task-repository';

interface CreateTaskUseCaseRequest {
  userId: string;
  title: string;
}

interface CreateTaskUseCaseResponse {
  task: Task;
}

export class CreateTaskUseCase {
  constructor(private userRepository: UserRepository, private taskRepository: TaskRepository) {}

  async execute({ title, userId }: CreateTaskUseCaseRequest): Promise<CreateTaskUseCaseResponse> {
    const user = await this.userRepository.findById(userId);

    if (!user) throw new AppError(400, 'user not found');

    const task = Task.create({ title, userId });

    await this.taskRepository.create(task);

    return {
      task,
    };
  }
}
