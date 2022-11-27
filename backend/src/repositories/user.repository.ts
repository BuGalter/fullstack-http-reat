import { User, } from '../models/User';
import { users, } from '../storage/users';

const createUserRepository = () => {
  const userRepository = users.map((el, index) => {
    const userId = index + 1;
    const userName = el;
    const user = new User(userId, userName);
    return user;
  });
  return userRepository;
};

export const userRepository = createUserRepository();
