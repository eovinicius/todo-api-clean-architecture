import { AppError } from '../../error/app-error';
import { UserRepository } from './../../repositories/user-repository';
import { Task } from '../../../domain/entities/tasks';
import { TaskRepository } from './../../repositories/task-repository';

interface IRequest {
  userId: string;
  title: string;
}

interface IResponse {
  title: string;
  completed: Boolean;
  createdAt: Date;
}

export class CreateTaskUseCase {
  constructor(private userRepository: UserRepository, private taskRepository: TaskRepository) {}

  async execute({ title, userId }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findById(userId);

    if (!user) throw new AppError(400, 'user not found');

    const task = new Task({ title, userId });

    await this.taskRepository.create(task);

    const responseTask = {
      title: task.title,
      completed: task.completed,
      createdAt: task.createdAt,
    };

    return responseTask;
  }
}
