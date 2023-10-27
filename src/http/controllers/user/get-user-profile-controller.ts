import { Request, Response } from 'express';
import { makeGetUserProfile } from '../../../application/factories/user/make-get-user-profile';

interface IRequest {
  userId: string;
}

export class GetUserProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: IRequest = request.body;

    const getUserProfileUseCase = makeGetUserProfile();

    const user = getUserProfileUseCase.execute(data);

    return response.status(200).json(user);
  }
}
