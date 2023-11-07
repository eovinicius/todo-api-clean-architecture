import { Request, Response } from 'express';
import { makeFindTaskById } from '../../../application/factories/make-find-task-by-id';

export class FindTaskByIdController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findAllTaskUseCase = makeFindTaskById();

    const task = await findAllTaskUseCase.execute({ id });

    return response.status(201).json(task);
  }
}
