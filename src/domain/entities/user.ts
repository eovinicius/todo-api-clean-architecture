import { Entity } from '../../core/entity';
import { Optional } from '../../core/types/optional';

interface UserProps {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

export class User extends Entity<UserProps> {
  public static create(props: Optional<UserProps, 'createdAt'>, id?: string) {
    const user = new User(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    );

    return user;
  }

  get name(): string {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
  }

  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }
  get createdAt(): Date {
    return this.props.createdAt;
  }
}
