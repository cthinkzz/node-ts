import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import { userRouter } from './routes';
const app = express();

const PORT = 3000;

app.use(express.json())

app.use(userRouter);

app.use(errorHandler)
app.listen(PORT, () => console.log(`Listening at ${PORT}`))