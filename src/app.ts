import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import router from './app/routes';
import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import cookieParser from 'cookie-parser';

// parser
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));

// application routing
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Bike Shop Project!');
});

// global error handler
app.use(globalErrorHandler);

// not found
app.use(notFound);

export default app;
