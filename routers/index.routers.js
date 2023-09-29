const express = require('express');
const routes = express.Router();

routes.get('/',(req,res)=>{
    res.send('Conexion para pruebas');
})

routes.get('/ListaProductos',(req,res)=>{
    res.send('Conexion para lista de produtos');
})

routes.get('/NotasBoletas',(req,res)=>{
    res.send(('Conexion para  notas y bolestas'))
})

module.exports     = routes