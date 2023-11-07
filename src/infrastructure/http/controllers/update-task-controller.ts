import { Request, Response } from 'express';
import { makeUpdateTask } from '../../../application/factories/make-update-task';

interface IRequest {
  title: string;
  completed: boolean;
}

export class UpdateTaskController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { title, completed }: IRequest = request.body;

    const createTaskUseCase = makeUpdateTask();

    const task = await createTaskUseCase.execute({ id, title, completed });

    return response.status(204).json(task);
  }
}
