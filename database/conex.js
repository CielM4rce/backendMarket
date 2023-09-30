import mysql from 'promise-mysql';
import config from '../config';

const conex = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password

})

const getConex = () =>{
    return conex;
} 

module.exports ={
    getConex
}