import { InjectRepository } from '@nestjs/typeorm';
//import { User } from "./user.entity";
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  email: string;
  password: string;
}
@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  findByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }
  findAll() {
    return this.users;
  }
  create(email: string, password: string) {
    const user: User = {
      id: this.idCounter++,
      email,
      password,
    };

    this.users.push(user);
    return user;
  }
}
