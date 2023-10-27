import { BcryptCryptoProvider } from '../../../infrastructure/provider/bcrypt-crypto-provider';
import { PrismaUserRepository } from '../../../infrastructure/repositories/prisma/prisma-user-repository';
import { RegisterUserUseCase } from '../../usecases/user/register-user-use-case';

export function makeRegisterUser() {
  const userRepository = new PrismaUserRepository();
  const cryptoProvider = new BcryptCryptoProvider();

  const registerUserUseCase = new RegisterUserUseCase(userRepository, cryptoProvider);

  return registerUserUseCase;
}
