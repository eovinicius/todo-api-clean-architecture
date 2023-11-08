import { User as PrismaUser, Prisma } from '@prisma/client';
import { User } from '../../../../domain/entities/user';

export class PrismaUserMapper {
  public static ToDomain(user: PrismaUser): User {
    return User.create({
      name: user.name,
      email: user.email,
      password: user.password,
      createdAt: user.createdAt,
    });
  }

  public static ToPrisma(user: User): Prisma.UserUncheckedCreateInput {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      createdAt: user.createdAt,
    };
  }
}
