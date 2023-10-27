import { randomUUID } from 'crypto';

export class User {
  public id: string = randomUUID();
  public name: string;
  public email: string;
  public password: string;
  public createdAt: Date = new Date();

  constructor(data: { name: string; email: string; password: string }) {
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
  }
}
