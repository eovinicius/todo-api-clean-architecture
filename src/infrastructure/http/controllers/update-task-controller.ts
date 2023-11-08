import { Request, Response } from 'express';
import { makeUpdateTask } from '../../../application/factories/make-update-task';

interface IRequest {
  title: string;
}

export class UpdateTaskController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;
    const { title }: IRequest = request.body;

    const createTaskUseCase = makeUpdateTask();

    const task = await createTaskUseCase.execute({ userId, title });

    return response.status(204).json(task);
  }
}
