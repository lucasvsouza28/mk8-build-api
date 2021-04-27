import 'reflect-metadata'
import express, {
    Request,
    Response,
} from 'express';
import cors from 'cors';

import './containers/index';
import routes from './routers';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static(path.resolve(__dirname, '../public')));

const port = process.env.PORT || 3001;

app.get('/status', (_: Request, res: Response) => {
    return res.send('OK');
});

app.use(routes);

app.listen(port, () => {
    console.log(`API listening on port ${port}`);
});