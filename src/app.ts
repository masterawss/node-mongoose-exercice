import express from 'express';
import bookRouter from './routes/bookRoutes'


const app = express();
app.use(bookRouter)
app.use(express.json())

export default app;