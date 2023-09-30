import express from 'express';
import morgan from 'morgan';
import { rute } from '../routers/index.routers';
const app =express();

app.use(require('../routers/index.routers'));
/*app.get('/',(req,res)=>{
    res.send("hola")
})*/

//Setting port
app.set('port', 4000)

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

export default app;