import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User({ name, email });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((user) => user.getId() === id);

    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find((user) => user.getEmail() === email);

    return user;
  }

  turnAdmin(receivedUser: User): User {
    const user = this.findById(receivedUser.getId());

    user.setAdmin(true);

    const userIndex = this.users.findIndex(
      (user) => user.getId() === receivedUser.getId()
    );

    this.users[userIndex] = user;

    return user;
  }

  list(user_id: string): User[] {
    if (user_id) {
      return this.users.filter((user) => user.getId() === user_id);
    }

    return this.users;
  }
}

export { UsersRepository };
