import { GetUserProfileUseCase } from '../../usecases/user/get-user-profile-use-case';
import { PrismaUserRepository } from '../../../infrastructure/repositories/prisma/prisma-user-repository';

export function makeGetUserProfile() {
  const prismaUserRepository = new PrismaUserRepository();
  const getUserProfileUseCase = new GetUserProfileUseCase(prismaUserRepository);

  return getUserProfileUseCase;
}
