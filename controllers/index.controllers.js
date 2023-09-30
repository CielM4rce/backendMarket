import {getConex} from '../database/conex';

const getListProduc = async (req,res)=>{
    try{
        const connection = await getConex();
        const result = await connection.query("SELECT ID,COD_BARRAS,NOM_PRODUC, PRECIO, BLOQUE, bloque.NOM_BLOQUE FROM productos INNER JOIN bloque ON bloque.ID_BLOQUE = productos.BLOQUE");
        //console.log(result);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
}

const getListBloque = async (req,res)=>{
    try{
        const connection = await getConex();
        const result = await connection.query("SELECT * FROM bloque");
        //console.log(result);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const getResponse = (req,res)=>{
    res.json('respuesta inicials')
}

export const methods ={
    getResponse,
    getListBloque,
    getListProduc
};