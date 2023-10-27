import { AppError } from '../../error/app-error';
import { UserRepository } from '../../repositories/user-repository';
import { User } from '../../../domain/entities/user';

interface IRequest {
  userId: string;
}

interface IResponse {
  user: User;
}

export class GetUserProfileUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(data: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findById(data.userId);

    if (!user) throw new AppError(400, 'user already exists');

    return {
      user,
    };
  }
}
