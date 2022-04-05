const clientLogin = "SELECT id, firstname, lastname, cell_no, email FROM users WHERE password=$1 AND cell_no=$2";
const addClient = "INSERT into users (name, surname, cell_no, email, password) values($1, $2, $3, $4, $5";
const checkClientCelllExists = "SELECT * FROM users WHERE cell_no= $1";
const checkClientEmailExists = "SELECT * FROM users WHERE email= $1";
const getClients = "SELECT * FROM users";
const removeClient= "DELETE FROM users WHERE id=$1";
const getClientById = "SELECT * FROM users WHERE id= $1"
const getClientByEmail = "SELECT * FROM users WHERE email= $1 OR cell_no=$1"






module.exports ={
    clientLogin,
    addClient,
    checkClientCelllExists,
    checkClientEmailExists,
    getClients,
    removeClient,
    getClientById,
    getClientByEmail
};