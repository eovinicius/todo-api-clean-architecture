import { AppError } from '../error/app-error';
import { UserRepository } from '../repositories/user-repository';
import { CryptoProvider } from '../providers/crypto-provider';
import { User } from '../../domain/entities/user';

interface AuthenticateUserUseCaseRequest {
  email: string;
  password: string;
}

type AuthenticateUserUseCaseResponse = {
  user: User;
};

export class AuthenticateUserUseCase {
  constructor(private userRepository: UserRepository, private cryptoProvider: CryptoProvider) {}

  async execute({ email, password }: AuthenticateUserUseCaseRequest): Promise<AuthenticateUserUseCaseResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new AppError(400, 'email or password incorrect');

    const doesPasswordsMatch = await this.cryptoProvider.compare(password, user.password);

    if (!doesPasswordsMatch) throw new AppError(400, 'email or password incorrect');

    return {
      user,
    };
  }
}
