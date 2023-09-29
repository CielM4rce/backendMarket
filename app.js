const express = require('express');
const { rute } = require('./routers/index.routers');
const app =express();

app.use(require('./routers/index.routers'));
/*app.get('/',(req,res)=>{
    res.send("hola")
})*/

app.listen(4000,()=>{
    console.log('Servidor a la escucha');
})