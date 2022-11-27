import { User, } from '../models/User';
import { UserService, } from '../services/users.service';

export interface IUserController {
  userService: UserService;
  getOne(id: string): Promise<User>;
  getAll(): Promise<User[]>;
}

export class UserController implements IUserController {
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async getOne(id: string): Promise<User> {
    return await this.userService.getOne(+id);
  }

  async getAll(): Promise<User[]> {
    return await this.userService.getAll();
  }
}
