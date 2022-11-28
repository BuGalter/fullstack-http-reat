import config from '../config/config';
import { UserController, } from '../controllers/users.controller';

export default [
  {
    method: 'GET',
    path: `${config.server.prefix}/users`,
    controller: UserController.getAll,
  }
];
