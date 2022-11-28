import config from '../config/config';
import { MonthController, } from '../controllers/months.controller';

export default [
  {
    method: 'GET',
    path: `${config.server.prefix}/months`,
    controller: MonthController.getAll,
  }
];
