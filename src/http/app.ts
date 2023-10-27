import 'express-async-errors';
import 'reflect-metadata';
import Express from 'express';
import { routes } from './routes';
import { ErrorMiddleware } from './middlewares/error-middleware';

export class App {
  private app: Express.Application;

  constructor() {
    this.app = Express();
    this.express();
    this.routes();
    this.middlewares();
  }

  private express() {
    this.app.use(Express.json());
  }

  private routes() {
    this.app.use(routes);
  }

  private middlewares() {
    this.app.use(ErrorMiddleware.handleError);
  }

  public start(port: string | number) {
    this.app.listen(port, () => {
      console.log(`SERVER STARTED ON PORT ${port}! 🚀`);
    });
  }
}
