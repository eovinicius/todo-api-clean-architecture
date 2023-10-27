import { randomUUID } from 'crypto';

export class Task {
  public id: string = randomUUID();
  public userId: string;
  public title: string;
  public completed: boolean = false;
  public createdAt: Date = new Date();

  constructor(data: { title: string; userId: string }) {
    this.title = data.title;
    this.userId = data.userId;
  }
}
