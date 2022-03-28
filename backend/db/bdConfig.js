const  Pool  = require("pg").Pool;

const pool = new Pool({
    user: "admin",
    host: "localhost",
    database: "thumamina",
    port: '4304'
});

module.exports = pool;