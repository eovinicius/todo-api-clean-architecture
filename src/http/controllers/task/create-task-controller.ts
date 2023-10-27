import { Request, Response } from 'express';
import { makeCreateTask } from '../../../application/factories/task/make-create-task';

export class CreateTaskController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { title } = request.body;

    const createTaskUseCase = makeCreateTask();

    const task = await createTaskUseCase.execute({
      title,
      userId: id,
    });

    return response.status(201).json(task);
  }
}
