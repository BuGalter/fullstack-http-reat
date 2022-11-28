import { User, } from '../models/User';
import { UserService, } from '../services/users.service';

export interface IUserController {
  getOne?(id: string): Promise<User>;
  getAll?(): Promise<User[]>;
}

export class UserController implements IUserController {
  static async getOne(id: string): Promise<User> {
    const userService = new UserService();
    return await userService.getOne(+id);
  }

  static async getAll(): Promise<User[]> {
    const userService = new UserService();
    return await userService.getAll();
  }
}
