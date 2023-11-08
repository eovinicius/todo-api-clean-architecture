import { UserRepository } from '../../src/application/repositories/user-repository';
import { User } from '../../src/domain/entities/user';

export class InMemoryUserRepository implements UserRepository {
  public items: User[] = [];

  async create(user: User): Promise<void> {
    this.items.push(user);
  }

  async findById(id: string): Promise<User | null> {
    const user = this.items.find((user) => user.id === id);

    if (!user) return null;

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.items.find((user) => user.email === email);

    if (!user) return null;

    return user;
  }

  async save(user: User): Promise<void> {
    const index = this.items.findIndex((u) => u.id === user.id);

    if (index !== -1) {
      this.items[index] = user;
    } else {
      throw new Error('User not found.');
    }
  }
}
