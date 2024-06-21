import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import { Server } from 'http';
import router from './routes.js';

export class SetupApplication {
  private server?: Server;

  constructor(public app = express()) { }

  public init(): void {
    this.setupExpress();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.app.use(router);
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  public start(): void {
    this.server = this.app.listen(process.env.PORT || 3333, () => {
      console.log(`Server running on port ${process.env.PORT || 3333}`);
    });
  }
}