import { PrismaUserRepository } from '../../infrastructure/database/prisma/repositories/prisma-user-repository';
import { GetUserProfileUseCase } from '../use-cases/get-user-profile-use-case';

export function makeGetUserProfile() {
  const prismaUserRepository = new PrismaUserRepository();
  const getUserProfileUseCase = new GetUserProfileUseCase(prismaUserRepository);

  return getUserProfileUseCase;
}
