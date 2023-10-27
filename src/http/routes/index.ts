import { Router } from 'express';
import { routesUser } from './routes-user';
import { routesTask } from './routes-task';

export const routes = Router();

routes.use(routesUser);
routes.use('/task', routesTask);

routes.get('/', (req, res) => {
  res.json({ message: 'hello world!' });
});
