import { UserController, } from '../controllers/users.controller';
import { userRepository, } from '../repositories/user.repository';
import { UserService, } from '../services/users.service';

export const usersHandler = async () => {
  const userService = new UserService(userRepository);
  const userController = new UserController(userService);
  const users = await userController.getAll();
  return users;
};
