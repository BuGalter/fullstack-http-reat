import * as http from 'http';
import config from './config/config';
import routes from './routes';

const requestListener: http.RequestListener = async (req, res) => {
  const route = routes.find((el) => el.path === req.url);
  if (route) {
    const data = await route.controller();
    const jsonData = JSON.stringify(data);
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200);
    res.end(jsonData);
  } else {
    res.writeHead(404);
    res.end('Bad request');
  }
};

const createServer = async () => {
  const server = http.createServer(requestListener);
  return server;
};

export const start = async () => {
  const server = await createServer();
  const { port, host, } = config.server;
  server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });
};
