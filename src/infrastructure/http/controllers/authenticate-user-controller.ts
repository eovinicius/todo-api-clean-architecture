import { Request, Response } from 'express';
import { MakeAuthenticateUser } from '../../../application/factories/make-authenticate';
import { sign } from 'jsonwebtoken';
import { env } from '../../env';

interface IRequest {
  email: string;
  password: string;
}

export class AuthenticateUserController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const data: IRequest = request.body;

    const authenticateUserUseCase = MakeAuthenticateUser();

    const { user } = await authenticateUserUseCase.execute(data);

    const token = sign({}, env.JWT_SECRET, {
      subject: user.id,
      expiresIn: '1h',
    });

    return response.status(200).json(token);
  }
}
