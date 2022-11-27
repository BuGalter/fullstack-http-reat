import config from '../config/config';
import { weekDaysHandler, } from '../handlers/week-days.handler';

export default [
  {
    method: 'GET',
    path: `${config.server.prefix}/weekdays`,
    controller: weekDaysHandler,
  }
];
