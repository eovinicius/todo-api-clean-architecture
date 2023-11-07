import { UserRepository } from '../../../../application/repositories/user-repository';
import { User } from '../../../../domain/entities/user';
import { prisma } from '../prisma-client';


export class PrismaUserRepository implements UserRepository {
  async register(user: User): Promise<User> {
    await prisma.user.create({ data: user });

    return user;
  }
  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { id } });

    return user;
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { email } });

    return user;
  }
  async update(user: User): Promise<void> {
    await prisma.user.update({ where: { id: user.id }, data: user });
  }
}
