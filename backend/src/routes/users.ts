import config from '../config/config';
import { usersHandler, } from '../handlers/users.handler';

export default [
  {
    method: 'GET',
    path: `${config.server.prefix}/users`,
    controller: usersHandler,
  }
];
