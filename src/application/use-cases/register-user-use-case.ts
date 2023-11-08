import { User } from '../../domain/entities/user';
import { AppError } from '../error/app-error';
import { CryptoProvider } from '../providers/crypto-provider';
import { UserRepository } from '../repositories/user-repository';

interface RegisterUserUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

interface RegisterUserUseCaseResponse {
  user: User;
}

export class RegisterUserUseCase {
  constructor(private userRepository: UserRepository, private cryptoProvider: CryptoProvider) {}

  async execute({ name, email, password }: RegisterUserUseCaseRequest): Promise<RegisterUserUseCaseResponse> {
    if (await this.userRepository.findByEmail(email)) throw new AppError(400, 'email already registered');

    const hashedPassoword = await this.cryptoProvider.hash(password);

    const user = User.create({
      name,
      email,
      password: hashedPassoword,
    });

    await this.userRepository.register(user);

    return {
      user,
    };
  }
}
