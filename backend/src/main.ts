import { start, } from './server/index';

try {
  start();
} catch (error) {
  console.log(error);
}
