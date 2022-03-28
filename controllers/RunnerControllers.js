const seed = require('../db/config')
const { rows } = require('pg/lib/defaults');

const pool = seed;

exports.register = (req, res) => {
    let query = {
        text: 'INSERT INTO client(name,surname,cell_no,email,password) VALUES ($1, $2, $3, $4,$5) RETURNING (name,surname,cell_no, email)',
        value: [req.body.name, req.body.surname, req.body.cell_no,req.body.email, req.body.password]
    }
    pool.query(query.text, query.value)
        .then(data => {
            console.log(data);
            return res.send(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).send(err);
        })
},
exports.logIn = (req, res) => {
    let query = {
        text: 'SELECT name,surname,cell_no,email,password FROM client WHERE email = $1 AND password = $2',
        value: [req.body.email, req.body.password]
    }
    pool.query(query.text, query.value)
        .then(data => {
            console.log(data.rows);
            return res.send(data.rows);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        })
}