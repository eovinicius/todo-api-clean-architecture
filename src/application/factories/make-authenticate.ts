import { PrismaUserRepository } from '../../infrastructure/database/prisma/repositories/prisma-user-repository';
import { BcryptCryptoProvider } from '../../infrastructure/providers/bcrypt-crypto-provider';
import { AuthenticateUserUseCase } from '../use-cases/authenticate-user-use-case';

export function MakeAuthenticateUser() {
  const userRepository = new PrismaUserRepository();
  const cryptoProvider = new BcryptCryptoProvider();

  const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository, cryptoProvider);

  return authenticateUserUseCase;
}
