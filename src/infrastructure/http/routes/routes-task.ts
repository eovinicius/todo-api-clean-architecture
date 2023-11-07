import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { CreateTaskController } from '../controllers/create-task-controller';
import { FindAllTaskController } from '../controllers/find-all-task-controller';
import { FindTaskByIdController } from '../controllers/find-task-by-id-controller';
import { UpdateTaskController } from '../controllers/update-task-controller';

export const routesTask = Router();

routesTask.use(authMiddleware);
routesTask.post('/create', CreateTaskController.handle);
routesTask.get('/', FindAllTaskController.handle);
routesTask.get('/:id', FindTaskByIdController.handle);
routesTask.put('/:id', UpdateTaskController.handle);
