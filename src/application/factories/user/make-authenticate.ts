import { BcryptCryptoProvider } from '../../../infrastructure/provider/bcrypt-crypto-provider';
import { PrismaUserRepository } from '../../../infrastructure/repositories/prisma/prisma-user-repository';
import { AuthenticateUserUseCase } from '../../usecases/user/authenticate-user-use-case';

export function MakeAuthenticateUser() {
  const userRepository = new PrismaUserRepository();
  const cryptoProvider = new BcryptCryptoProvider();

  const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository, cryptoProvider);

  return authenticateUserUseCase;
}
