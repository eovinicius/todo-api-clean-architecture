import { describe, expect, it, beforeEach } from 'vitest';
import { AppError } from '../error/app-error';
import { GetUserProfileUseCase } from './get-user-profile-use-case';
import { BcryptCryptoProvider } from '../../infrastructure/providers/bcrypt-crypto-provider';
import { InMemoryUserRepository } from '../../../test/repositories/in-memory-user-repository';


let userRepository: InMemoryUserRepository;
let cryptoProvider: BcryptCryptoProvider;
let sut: GetUserProfileUseCase;

describe('Get user profile Use Case', () => {
  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    cryptoProvider = new BcryptCryptoProvider();
    sut = new GetUserProfileUseCase(userRepository);
  });

  it('Should be able to get user profile', async () => {
    const passwordHash = await cryptoProvider.hash('12345');

    const createdUser = await userRepository.register({
      id: '01',
      name: 'john',
      email: 'john@doe.com',
      password: passwordHash,
      createdAt: new Date(),
    });

    const { user } = await sut.execute({
      userId: createdUser.id,
    });

    expect(user.id).toEqual(expect.any(String));
    expect(user.name).toEqual('john');
  });

  it('Should not able to get user profile with wrong id', async () => {
    await expect(() =>
      sut.execute({
        userId: 'non-existing-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
