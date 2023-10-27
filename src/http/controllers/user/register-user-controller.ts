import { Request, Response } from 'express';
import { makeRegisterUser } from '../../../application/factories/user/make-register-user';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

export class RegisterUserController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const data: IRequest = request.body;
    const registerUserUseCase = makeRegisterUser();

    await registerUserUseCase.execute(data);

    return response.status(201).send();
  }
}
