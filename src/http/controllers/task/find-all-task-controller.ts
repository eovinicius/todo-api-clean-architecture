import { Request, Response } from 'express';
import { makeFindAllTask } from '../../../application/factories/task/make-find-all-task-use-case';

export class FindAllTaskController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const findAllTaskUseCase = makeFindAllTask();

    const tasks = await findAllTaskUseCase.execute();

    return response.status(201).json(tasks);
  }
}
