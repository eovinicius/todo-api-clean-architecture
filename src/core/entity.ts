import { randomUUID } from 'crypto';

export class Entity<T> {
  private _id: string;
  protected props: T;

  constructor(props: T, id?: string) {
    this._id = id ?? randomUUID();
    this.props = props;
  }

  get id(): string {
    return this._id;
  }
}
