import { AppError } from '../error/app-error';
import { UserRepository } from '../repositories/user-repository';
import { User } from '../../domain/entities/user';

interface GetUserProfileUseCaseRequest {
  userId: string;
}

interface GetUserProfileUseCaseResponse {
  user: User;
}

export class GetUserProfileUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ userId }: GetUserProfileUseCaseRequest): Promise<GetUserProfileUseCaseResponse> {
    const user = await this.userRepository.findById(userId);

    if (!user) throw new AppError(400, 'user already exists');

    return {
      user,
    };
  }
}
