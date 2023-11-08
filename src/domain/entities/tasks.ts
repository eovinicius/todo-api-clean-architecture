import { Entity } from '../../core/entity';
import { Optional } from '../../core/types/optional';

interface TaskProps {
  userId: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt?: Date | null;
}

export class Task extends Entity<TaskProps> {
  public static create(props: Optional<TaskProps, 'createdAt' | 'updatedAt' | 'completed'>, id?: string) {
    const task = new Task(
      {
        ...props,
        createdAt: new Date(),
        completed: false,
      },
      id,
    );
    return task;
  }

  get userId(): string {
    return this.props.userId;
  }

  get title(): string {
    return this.props.title;
  }

  set title(title: string) {
    this.props.title = title;
    this.touch();
  }

  get completed(): boolean {
    return this.props.completed;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.createdAt;
  }

  touch() {
    this.props.updatedAt = new Date();
  }
}
