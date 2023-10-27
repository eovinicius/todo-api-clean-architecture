import 'dotenv/config';
import { App } from './app';

const app = new App();
const port = process.env.PORT || 3000;

app.start(port);
