import express from "express";
import { methods as controller } from "../controllers/index.controllers";
const routes = express.Router();

routes.get('/', controller.getResponse);
/*routes.get('/ListaProductos',(req,res)=>{
    res.send('Conexion para lista de produtos');
})*/
routes.get('/ListaProductos', controller.getListProduc);
routes.get('/ListaBloque',controller.getListBloque);
routes.get('/NotasBoletas',(req,res)=>{
    res.send(('Conexion para  notas y bolestas'))
})

module.exports     = routes