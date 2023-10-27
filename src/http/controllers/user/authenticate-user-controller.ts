import 'dotenv/config';
import { Request, Response } from 'express';
import { MakeAuthenticateUser } from '../../../application/factories/user/make-authenticate';
import { sign } from 'jsonwebtoken';

interface IRequest {
  email: string;
  password: string;
}

export class AuthenticateUserController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const data: IRequest = request.body;

    const authenticateUserUseCase = MakeAuthenticateUser();

    const { user } = await authenticateUserUseCase.execute(data);

    const secret = process.env.JWT_SECRET ?? '';

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn: '1h',
    });

    return response.status(200).json(token);
  }
}
