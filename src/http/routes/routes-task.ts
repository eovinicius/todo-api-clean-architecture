import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { CreateTaskController } from '../controllers/task/create-task-controller';
import { FindAllTaskController } from '../controllers/task/find-all-task-controller';
import { FindTaskByIdController } from '../controllers/task/find-task-by-id-controller';

export const routesTask = Router();

routesTask.use(authMiddleware);
routesTask.post('/create', CreateTaskController.handle);
routesTask.get('/', FindAllTaskController.handle);
routesTask.get('/:id', FindTaskByIdController.handle);
