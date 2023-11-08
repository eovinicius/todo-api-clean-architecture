import { UserRepository } from '../../../../application/repositories/user-repository';
import { User } from '../../../../domain/entities/user';
import { PrismaUserMapper } from '../mappers/prisma-user-mapper';
import { prisma } from '../prisma-client';

export class PrismaUserRepository implements UserRepository {
  async create(user: User): Promise<void> {
    const data = PrismaUserMapper.ToPrisma(user);
    await prisma.user.create({ data });
  }

  async findById(id: string): Promise<User | null> {
    const result = await prisma.user.findUnique({ where: { id } });

    if (!result) return null;

    return PrismaUserMapper.ToDomain(result);
  }

  async findByEmail(email: string): Promise<User | null> {
    const result = await prisma.user.findUnique({ where: { email } });
    if (!result) return null;

    return PrismaUserMapper.ToDomain(result);
  }

  async save(user: User): Promise<void> {
    const data = PrismaUserMapper.ToPrisma(user);

    await prisma.user.update({ where: { id: data.id }, data });
  }
}
