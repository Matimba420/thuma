const seed = require('../db/config')
const { rows } = require('pg/lib/defaults');

const pool = seed;

exports.logInAdmin = (req, res) => {
    let query = {
        text: 'SELECT * FROM admin WHERE email = $1 AND password = $2',
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