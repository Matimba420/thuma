
require('dotenv').config();
const  Pool  = require("pg").Pool;
//const connectionString=`postgresql://${process.env.DB_USER}/${process.env.DB_PWD}/@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const connecString = "postgres://rhcudpjfpzefxl:b4f482a130f175c7d539fdae0efb4d66f44b262d0ae56b53248cd9c928e8ce67@ec2-54-80-123-146.compute-1.amazonaws.com:5432/d11jp0hir6qsb3"
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "smart-serve",
    port: "5432",
    password: "Matimba1%"
});

module.exports = pool;

// {
//     user: process.env.DB_USER,
//     host: "localhost",
//     database: "smart-serve",
//     port: "5433",
//     password: "123456"
// }