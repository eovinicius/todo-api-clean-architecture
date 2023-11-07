import { User } from '../../domain/entities/user';
import { AppError } from '../error/app-error';
import { CryptoProvider } from '../providers/crypto-provider';
import { UserRepository } from '../repositories/user-repository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

interface IResponse {
  user: User;
}

export class RegisterUserUseCase {
  constructor(private userRepository: UserRepository, private cryptoProvider: CryptoProvider) {}

  async execute(data: IRequest): Promise<IResponse> {
    if (await this.userRepository.findByEmail(data.email)) throw new AppError(400, 'email already registered');

    const passwordhash = await this.cryptoProvider.hash(data.password);

    const user = new User(data);

    user.password = passwordhash;

    await this.userRepository.register(user);

    return {
      user,
    };
  }
}
