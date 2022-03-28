const seed = require('../db/config')
const { rows } = require('pg/lib/defaults');

const pool = seed;

exports.register = (req, res) => {
    let query = {
        text: 'INSERT INTO client(name,surname,cell_no,  password) VALUES ($1, $2, $3, $4) RETURNING (name,surname,cell_no)',
        value: [req.body.name, req.body.surname, req.body.cell_no, req.body.password]
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
        text: 'SELECT name,surname,cell_no,  password FROM client WHERE name = $1 AND password = $2',
        value: [req.body.name, req.body.password]
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