const clientLogin = "SELECT id, firstname, lastname, cell_no, email FROM client WHERE password=$1 AND cell_no=$2";
const addClient = "INSERT into client (name, surname, cell_no, email, password) values($1, $2, $3, $4, $5)";
const checkClientCelllExists = "SELECT * FROM client WHERE cell_no= $3";
const checkClientEmailExists = "SELECT * FROM client WHERE email= $1 and is_active='true'";
const checkAdminEmailExists = "SELECT * FROM client  WHERE email= $1 and is_active='true'";
const getAdmins = "SELECT * FROM client  where is_active='true'  ORDER BY id ASC";
const getAdminPasswordByEmail="SELECT * FROM client  WHERE email=$1";
const getClientPasswordByEmail="SELECT * FROM client WHERE email=$1";
const getAdminById = "SELECT * FROM client  WHERE id =$1 and is_active='true'"
const getClients = "SELECT * FROM client";
const removeClient= "DELETE FROM client WHERE id=$1";
const getClientById = "SELECT * FROM client WHERE id= $1"
const getClientByEmail = "SELECT * FROM client WHERE email= $1 OR cell_no=$1"






module.exports ={
    clientLogin,
    addClient,
    checkClientCelllExists,
    checkClientEmailExists,
    getClientPasswordByEmail,
    checkAdminEmailExists,
    getAdminPasswordByEmail,
    getAdminById,
    getClients,
    getAdmins,
    removeClient,
    getClientById,
    getClientByEmail
};