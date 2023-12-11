import { beforeEach, describe, expect, it } from 'vitest';
import { UserRepository } from '../repositories/user-repository';
import { CryptoProvider } from '../providers/crypto-provider';
import { AuthenticateUserUseCase } from './authenticate-user-use-case';
import { User } from '../../domain/entities/user';

interface AuthenticateUserUseCaseRequest {
  email: string;
  password: string;
}

// Mocking UserRepository
class MockUserRepository implements UserRepository {
  create(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
  save(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
  async findByEmail(email: string): Promise<User | null> {
    return User.create({
      name: 'john doe',
      email: 'johndoe@gmail.com',
      password: '12345',
    });
  }
}

// Mocking CryptoProvider
class MockCryptoProvider implements CryptoProvider {
  hash(password: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
  async compare(password: string, hashedPassword: string): Promise<boolean> {
    // Replace this with your own mock logic for password comparison
    return password === hashedPassword;
  }
}

describe('AuthenticateUserUseCase', () => {
  let userRepository: UserRepository;
  let cryptoProvider: CryptoProvider;
  let authenticateUserUseCase: AuthenticateUserUseCase;

  beforeEach(() => {
    userRepository = new MockUserRepository();
    cryptoProvider = new MockCryptoProvider();
    authenticateUserUseCase = new AuthenticateUserUseCase(userRepository, cryptoProvider);
  });

  it('should authenticate user with valid credentials', async () => {
    const validRequest: AuthenticateUserUseCaseRequest = {
      email: 'example@example.com',
      password: 'password',
    };

    const response = await authenticateUserUseCase.execute(validRequest);

    expect(response.user.email).toBe(validRequest.email);
  });

  it('should throw AppError when email is incorrect', async () => {
    const invalidRequest: AuthenticateUserUseCaseRequest = {
      email: 'wrong@example.com',
      password: 'password',
    };

    await expect(authenticateUserUseCase.execute(invalidRequest)).rejects.toThrow(AppError);
  });

  it('should throw AppError when password is incorrect', async () => {
    const invalidRequest: AuthenticateUserUseCaseRequest = {
      email: 'example@example.com',
      password: 'wrongPassword',
    };

    await expect(authenticateUserUseCase.execute(invalidRequest)).rejects.toThrow(AppError);
  });
});
