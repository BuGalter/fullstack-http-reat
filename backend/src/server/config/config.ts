import { config, } from 'dotenv';
import { IConfigServer, } from '../interfaces/config-server.interface';

config();

export default {
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 3000,
    host: process.env.HOST ? process.env.HOST : 'localhost',
    prefix: '/api/v1',
  } as IConfigServer,
};
