import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../../../application/error/app-error';
import { env } from '../../env';

interface IPayload {
  iat: number;
  exp: number;
  sub: string;
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const BearerToken = req.headers.authorization;
  try {
    if (!BearerToken) throw new AppError(401, 'Unauthorized');

    const token = BearerToken.split(' ')[1];

    if (!token) throw new AppError(401, 'Unauthorized');

    const secret = env.JWT_SECRET;

    const { sub } = verify(token, secret) as IPayload;

    if (!sub) throw new AppError(401, 'Unauthorized');

    req.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError(401, 'Unauthorized');
  }
};
