import * as http from 'http';
import config from './config/config';
import routes from './routes';

const requestListener: http.RequestListener = async (req, res) => {
  const route = routes.find((el) => el.path === req.url);
  if (route) {
    const data = await route.controller();
    const jsonData = JSON.stringify(data);
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(jsonData);
  } else {
    res.writeHead(404);
    res.end('Bad request');
  }
  // const regexp = new RegExp(req.url);
  /*   console.log(regexp);
  console.log(routes);
  let matches;
  for (let i = 0; i < routes.length; i += 1) {
    const route = routes[i].path;
    matches = route.match(regexp);
  }
  console.log(matches);
 */
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
