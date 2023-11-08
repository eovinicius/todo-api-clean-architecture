import { describe, expect, it, beforeEach } from 'vitest';
import { AuthenticateUserUseCase } from './authenticate-user-use-case';
import { AppError } from '../error/app-error';
import { BcryptCryptoProvider } from '../../infrastructure/providers/bcrypt-crypto-provider';
import { InMemoryUserRepository } from '../../../test/repositories/in-memory-user-repository';
import { User } from '../../domain/entities/user';

let userRepository: InMemoryUserRepository;
let cryptoProvider: BcryptCryptoProvider;
let sut: AuthenticateUserUseCase;

describe('Authenticate Use Case', () => {
  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    cryptoProvider = new BcryptCryptoProvider();
    sut = new AuthenticateUserUseCase(userRepository, cryptoProvider);
  });

  it('Should be able to authenticate', async () => {
    const passwordHash = await cryptoProvider.hash('12345');

    const newUser = User.create({
      name: 'vinicius',
      email: 'vinicius@mail.com',
      password: passwordHash,
      createdAt: new Date
    })

    await userRepository.create(newUser);

    const { user } = await sut.execute({
      email: 'john@doe.com',
      password: '12345',
    });

    expect(user.id).toEqual(expect.any(String));
  });

  it('Should not able to authenticate with wrong email', async () => {
    await expect(() =>
      sut.execute({
        email: 'john@doe.com',
        password: '12345',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should not able to authenticate with wrong password', async () => {
    const passwordHash = await cryptoProvider.hash('12345');

    await userRepository.create({
      id: '01',
      name: 'john',
      email: 'john@doe.com',
      password: passwordHash,
      createdAt: ,
    });

    await expect(() =>
      sut.execute({
        email: 'john@doe.com',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
