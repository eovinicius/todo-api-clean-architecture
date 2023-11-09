import 'dotenv/config';
import { App } from './app';
import { env } from '../env';

const app = new App();
const port = env.PORT;

app.start(port);
