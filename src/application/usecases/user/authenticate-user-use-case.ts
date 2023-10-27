import { AppError } from '../../error/app-error';
import { UserRepository } from './../../repositories/user-repository';
import { CryptoProvider } from './../../providers/crypto-provider';
import { User } from '../../../domain/entities/user';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
}

export class AuthenticateUserUseCase {
  constructor(private userRepository: UserRepository, private cryptoProvider: CryptoProvider) {}

  async execute(data: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(data.email);

    if (!user) throw new AppError(400, 'email or password incorrect');

    const doesPasswordsMatch = await this.cryptoProvider.compare(data.password, user.password);

    if (!doesPasswordsMatch) throw new AppError(400, 'email or password incorrect');

    return {
      user,
    };
  }
}
