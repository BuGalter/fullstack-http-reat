import config from '../config/config';
import { YearController, } from '../controllers/year.controller';

export default [
  {
    method: 'GET',
    path: `${config.server.prefix}/year`,
    controller: YearController,
  }
];
