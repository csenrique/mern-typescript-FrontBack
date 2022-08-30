import express, { urlencoded } from 'express';
const app = express();
import config from './config';
import videosRouts from './routes/videos.routes';
import morgan from 'morgan';
import cors from 'cors';

app.set('port', config.PORT);

app.use(morgan('dev'));

app.use(cors());
app.use(express.json());
app.use(urlencoded({extended: false}));

app.use(videosRouts);

export default app;