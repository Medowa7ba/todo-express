import express, { NextFunction, Request, Response } from 'express';

import { json } from 'body-parser';

import todoRoutes from './routes/todo'

const app = express();

app.use(json())

app.use('/todos',todoRoutes)

app.use((err: Error, req:Request, res:Response, next: NextFunction) =>{
    res.json({message: err.message})
})

app.listen(2010)
