const  Pool  = require("pg").Pool;

const pool = new Pool({
    user: "thomas",
    password: "password123",
    host: "129.232.211.166",
    database: "techgeeks",
    port: '5432'
});

module.exports = pool;
