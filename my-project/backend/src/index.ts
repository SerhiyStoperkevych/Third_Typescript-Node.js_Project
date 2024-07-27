import express, { Application } from 'express';
import cors from 'cors';
import { router as userRoute } from './routes/users';
import { router as todoRoute } from './routes/todos';

const app: Application = express();
const port = 3001;

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

app.use(express.json());

app.use('/users', userRoute);
app.use('/todos', todoRoute);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

export { app };
