import { Task } from '../../domain/entities/tasks';

export interface TaskRepository {
  create(task: Task): Promise<Task>;
  findAll(): Promise<Task[]>;
  findById(id: string): Promise<Task | null>;
  save(task: Task): Promise<void>;
  delete(id: string): Promise<void>;
}
