import { v4 as uuidV4 } from "uuid";

class User {
  private id: string;
  private name: string;
  private email: string;
  private admin: boolean;
  private created_at: Date;
  private updated_at: Date;

  constructor({ name, email }: { name: string; email: string }) {
    this.id = uuidV4();
    this.name = name;
    this.email = email;
    this.admin = false;
    this.created_at = new Date();
    this.updated_at = new Date();
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

  public getAdmin(): boolean {
    return this.admin;
  }

  public getCreatedAt(): Date {
    return this.created_at;
  }

  public getUpdatedAt(): Date {
    return this.updated_at;
  }

  public setAdmin(admin: boolean): void {
    this.admin = admin;
    this.updated_at = new Date();
  }
}

export { User };
