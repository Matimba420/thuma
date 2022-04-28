require('dotenv').config();
const  Pool  = require("pg").Pool;
const connectionString=`postgresql://${process.env.DB_USER}/${process.env.DB_PWD}/@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
//const connecString = "postgres://rhcudpjfpzefxl:b4f482a130f175c7d539fdae0efb4d66f44b262d0ae56b53248cd9c928e8ce67@ec2-54-80-123-146.compute-1.amazonaws.com:5432/d11jp0hir6qsb3"
const pool = new Pool({
    // connectionString: connecString,
    // ssl: {
    //     rejectUnauthorized: false
    // }

    //connectionString: process.env.NODE_ENV=="production"? process.env.DB_URL : connectionString

            user: process.env.DB_USER,
            host:process.env.DB_HOST,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT,
            password: process.env.DB_PWD

}); 

module.exports = pool;
