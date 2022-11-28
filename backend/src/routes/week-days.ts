import config from '../config/config';
import { WeekDaysController, } from '../controllers/week-days.controller';

export default [
  {
    method: 'GET',
    path: `${config.server.prefix}/weekdays`,
    controller: WeekDaysController.getAll,
  }
];
