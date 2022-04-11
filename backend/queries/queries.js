const clientLogin = "SELECT id, firstname, lastname, cell_no, email, role FROM users WHERE password=$1 AND cell_no=$2 or email=$2";
const addClient = "INSERT into users (name, surname, cell_no, email, password, role) values($1, $2, $3, $4, $5, $6)";
const checkClientCelllExists = "SELECT * FROM users WHERE cell_no= $1";
const checkClientEmailExists = "SELECT * FROM users WHERE email= $1";
const checkClientEmailCellNoExists="SELECT * FROM users WHERE email= $1 or cell_no=$2 and is_active='true'";
const getClients = "SELECT * FROM users";
const removeClient= "DELETE FROM users WHERE id=$1";
const getClientById = "SELECT * FROM users WHERE id= $1"
const getClientByEmail = "SELECT * FROM users WHERE email= $1 OR cell_no=$1"
const getClientPasswordByEmail="SELECT * FROM users WHERE email=$1 ";
const getClientPasswordByCelllNo ="SELECT * FROM users WHERE cell_no=$1 ";

const getServices= "SELECT * FROM service";
const addServices ="INSERT INTO service(name,description, cost, image) VALUES($1, $2, $3, $4)";
const checkServiceExist = "SELECT * FROM service WHERE name=$1";

const addAddress = "INSERT INTO address(street_address, suburb, city, postal_code) VALUES($1, $2, $3, $4)";
const getAddress = "SELECT * FROM address";

//const updateStatus = "UPDATE request SET status ='$1' WHERE id=$2";

const addRequest ="INSERT INTO request(client_id,service_id,comment) VALUES($1, $2, $3)";
const getRequest ="SELECT * FROM request where status = 'pending' ";
const getRequestByClientId ="SELECT * FROM request where client_id=$1";
const getRequestByRunnerId ="SELECT * FROM request where runner_id=$1";

const updateClient ="UPDATE users SET cell_no=$1, password=$2, name =$3, surname=$4, updated_at=current_date WHERE id = $5";
const getAllClients = "SELECT * FROM users WHERE role ='Client' AND is_active = 'true' ";
const getAllRunners= "SELECT * FROM users WHERE role ='Service provider' AND is_active = 'true' ";


module.exports ={
    // clientLogin,
    addClient,
    checkClientCelllExists,
    checkClientEmailExists,
    getClients,
    removeClient,
    getClientById,
    getClientByEmail,
    getClientPasswordByEmail,
    getClientPasswordByCelllNo,

    getServices,
    addServices,
    checkServiceExist,
    checkClientEmailCellNoExists,

    addAddress,
    getAddress,
    //updateStatus
    

    addRequest,
    getRequest,
    getRequestByRunnerId,
    getRequestByClientId,

    updateClient,
    getAllClients,
    getAllRunners
    
};
