const  Pool  = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "smart-serve",
    port: "5433",
    password: "123456"
});

module.exports = pool;