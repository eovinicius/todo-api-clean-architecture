import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../../application/error/app-error';


export class ErrorMiddleware {
  static handleError(error: Error, req: Request, res: Response, next: NextFunction) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    console.log(error.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
