import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { router } from './routes';
import './database';

// as tipagens seguem o padrão de @types/biblioteca
const app = express();

app.use(cors({ origin: "//localhost:3333"}));
app.use(express.json());

app.use(router);

// middleware de erros, recebem 4 parametros
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    })
})

app.listen(3000, () => console.log("Servidor is running"));