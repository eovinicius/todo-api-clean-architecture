import { expect, describe, it, beforeEach } from 'vitest';
import { RegisterUserUseCase } from './register-user-use-case';
import { InMemoryUserRepository } from '../../../infrastructure/repositories/in-memory/in-memory-user-repository';
import { BcryptCryptoProvider } from '../../../infrastructure/provider/bcrypt-crypto-provider';
import { AppError } from '../../error/app-error';
import { User } from '../../../domain/entities/user';

let userRepository: InMemoryUserRepository;
let cryptoProvider: BcryptCryptoProvider;
let sut: RegisterUserUseCase;

describe('Register use case', () => {
  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    cryptoProvider = new BcryptCryptoProvider();
    sut = new RegisterUserUseCase(userRepository, cryptoProvider);
  });

  it('should be able to register', async () => {
    const { user } = await sut.execute({
      name: 'john Doe',
      email: 'john@doe.com',
      password: '12345',
    });

    expect(user).toBeInstanceOf(User);
    expect(user.id).toEqual(expect.any(String));
  });

  it('should hash user password upon registration', async () => {
    const { user } = await sut.execute({
      name: 'john Doe',
      email: 'john@doe.com',
      password: '12345',
    });

    const isPasswordCorrectlyHash = await cryptoProvider.compare('12345', user.password);

    expect(isPasswordCorrectlyHash).to.equal(true);
  });

  it('should not be able to register with same email twice', async () => {
    await sut.execute({
      name: 'john Doe',
      email: 'john@doe.com',
      password: '12345',
    });

    expect(async () => {
      await sut.execute({
        name: 'john Doe',
        email: 'john@doe.com',
        password: '12345',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
