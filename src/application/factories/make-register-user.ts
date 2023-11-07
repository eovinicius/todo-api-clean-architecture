import { PrismaUserRepository } from '../../infrastructure/database/prisma/repositories/prisma-user-repository';
import { BcryptCryptoProvider } from '../../infrastructure/providers/bcrypt-crypto-provider';
import { RegisterUserUseCase } from '../use-cases/register-user-use-case';

export function makeRegisterUser() {
  const userRepository = new PrismaUserRepository();
  const cryptoProvider = new BcryptCryptoProvider();

  const registerUserUseCase = new RegisterUserUseCase(userRepository, cryptoProvider);

  return registerUserUseCase;
}
