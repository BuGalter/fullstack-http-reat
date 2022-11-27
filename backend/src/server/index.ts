import * as http from 'http';
import config from '../config/config';

const requestListener = (req, res) => {
  console.log(req);
  res.writeHead(200);
  res.end('My first server!');
};

const createServer = async () => {
  const server = http.createServer(requestListener);
  return server;
};

export const start = async () => {
  const server = await createServer();
  const { port, host, prefix, } = config.server;
  server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}${prefix}`);
  });
};
