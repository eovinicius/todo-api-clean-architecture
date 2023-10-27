import { Router } from 'express';
import { AuthenticateUserController } from '../controllers/user/authenticate-user-controller';
import { RegisterUserController } from '../controllers/user/register-user-controller';

export const routesUser = Router();

routesUser.post('/session', AuthenticateUserController.handle);
routesUser.post('/register', RegisterUserController.handle);
