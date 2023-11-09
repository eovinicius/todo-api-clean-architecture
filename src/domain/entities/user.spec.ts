import { describe, expect, it } from 'vitest';
import { User } from './user';

describe('', () => {
  it('should create a user', () => {
    const user = User.create({
      name: 'John Doe',
      email: 'johndoe@mail.com',
      password: '1234',
    });

    expect(user.id).toBeDefined();
    expect(user).toBeInstanceOf(User);
  });
});
