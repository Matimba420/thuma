const  Pool  = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "smart-serve",
    port: "5432",
    password: "Password"
});

module.exports = pool;