import express from 'express';

import cors from 'cors';

import http from 'http';

import routes from './routes';

import './database';

class App {
  constructor() {
    this.app = express();

    this.server = http.Server(this.app);

    this.middlerwares();

    this.routes();
  }

  middlerwares() {
    this.app.use(express.json());

    this.app.use(cors());
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
