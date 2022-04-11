const  Pool  = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "smart-serve",
<<<<<<< HEAD
    port: "5432",
    password: "Password"
=======
    port: "5433",
    password: "123456"
>>>>>>> 40fb03f63b1822fdddf33bbb88b65c4b6d25c3d7
});

module.exports = pool;