import { User, } from '../models/User';

export interface IUserService {
  userRepository: User[];
  getOne(id: number): Promise<User>;
  getAll(): Promise<User[]>;
}

export class UserService implements IUserService {
  userRepository: User[];

  constructor(userRepository: User[]) {
    this.userRepository = userRepository;
  }

  async getOne(id: number): Promise<User> {
    const user = await this.userRepository.find((el) => el.id === id);
    return user;
  }

  async getAll(): Promise<User[]> {
    return await this.userRepository;
  }
}
