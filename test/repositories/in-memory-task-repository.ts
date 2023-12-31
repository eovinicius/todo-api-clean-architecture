import { TaskRepository } from '../../src/application/repositories/task-repository';
import { Task } from '../../src/domain/entities/tasks';

export class InMemoryTaskRepository implements TaskRepository {
  public item: Task[] = [];

  async create(task: Task): Promise<void> {
    this.item.push();
  }

  async findAll(): Promise<Task[]> {
    return this.item;
  }
  async findById(id: string): Promise<Task | null> {
    const task = this.item.find((item) => item.id === id);

    if (!task) return null;

    return task;
  }
  async findByTitle(title: string): Promise<Task | null> {
    const task = this.item.find((item) => item.title === title);

    if (!task) return null;

    return task;
  }
  async save(task: Task): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async delete(id: string): Promise<void> {
    const index = this.item.findIndex((item) => item.id === id);

    if (index !== -1) {
      this.item.splice(index, 1);
    } else {
      throw new Error('Tarefa não encontrada.');
    }
  }
}
