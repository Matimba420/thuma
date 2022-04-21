
require('dotenv').config();
const  Pool  = require("pg").Pool;
const connectionString=`postgresql://${process.env.DB_USER}/${process.env.DB_PWD}/@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const pool = new Pool({
    // connectionString: process.env.NODE_ENV=="production"? process.env.DB_URL : connectionString
    
            user: process.env.DB_USER,
            host:process.env.DB_HOST,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT,
            password: process.env.DB_PWD
        
}); 

module.exports = pool;

// {
//     user: process.env.DB_USER,
//     host: "localhost",
//     database: "smart-serve",
//     port: "5433",
//     password: "123456"
// }