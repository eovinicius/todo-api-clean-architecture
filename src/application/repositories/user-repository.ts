import { User } from '../../domain/entities/user';

export interface UserRepository {
  register(user: User): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  update(user: User): Promise<void>;
}
