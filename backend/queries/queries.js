const clientLogin = "SELECT id, firstname, lastname, cell_no, email, role FROM users WHERE password=$1 AND cell_no=$2 or email=$2";
const addClient = "INSERT into users (name, surname, cell_no, email, password, role) values($1, $2, $3, $4, $5, $6)";
const checkClientCelllExists = "SELECT * FROM users WHERE cell_no= $1";
const checkClientEmailExists = "SELECT * FROM users WHERE email= $1";
const getClients = "SELECT * FROM users";
const removeClient= "DELETE FROM users WHERE id=$1";
const getClientById = "SELECT * FROM users WHERE id= $1"
const getClientByEmail = "SELECT * FROM users WHERE email= $1 OR cell_no=$1"
const getClientPasswordByEmail="SELECT * FROM users WHERE email=$1";

const getServices= "SELECT * FROM service";
const addServices ="INSERT INTO service(name,description, cost, image) VALUES($1, $2, $3, $4)";
const checkServiceExist = "SELECT * FROM service WHERE name=$1";

const addAddress = "INSERT INTO address(street_address, surburb, city, postal_code) VALUES($1, $2, $3, $4)";
const getAddress = "SELECT * FROM address";

//const updateStatus = "UPDATE request SET status ='$1' WHERE id=$2";






module.exports ={
    clientLogin,
    addClient,
    checkClientCelllExists,
    checkClientEmailExists,
    getClients,
    removeClient,
    getClientById,
    getClientByEmail,
    getClientPasswordByEmail,

    getServices,
    addServices,
    checkServiceExist,

    addAddress,
    getAddress
    //updateStatus
};