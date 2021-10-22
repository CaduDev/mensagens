import { Router } from 'express';

import MessageController from './app/controllers/MessageController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.send('Welcome to Message.')
});

routes.get('/message', MessageController.get);
routes.post('/message/:id', MessageController.updateStatus);
routes.get('/message/:id', MessageController.index);
routes.post('/update', MessageController.update);
routes.post('/create', MessageController.create);

export default routes;
