import { v4 as uuidV4 } from "uuid";

class User {
  private id: string;
  private name: string;
  private email: string;
  private isAdmin: boolean;

  constructor({ name, email }: { name: string; email: string }) {
    this.id = uuidV4();
    this.name = name;
    this.email = email;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getIsAdmin(): boolean {
    return this.isAdmin;
  }

  public setAdmin(isAdmin: boolean): void {
    this.isAdmin = isAdmin;
  }
}

export { User };
