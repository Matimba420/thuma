
const addClient = "INSERT into users (name, surname, cell_no, email, password, role) values($1, $2, $3, $4, $5, $6)";
const addRunner = "INSERT into users (name, surname, cell_no, email, password, role, is_active) values($1, $2, $3, $4, $5, $6, false)";
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

const addAddress = "INSERT INTO address(street_address, suburb, city, postal_code, request_id) VALUES($1, $2, $3, $4, $5)";
const getAddress = "SELECT * FROM address";

const updateStatus = "UPDATE request SET status =$1 WHERE id=$2";

const addRequest ="INSERT INTO request(client_id,service_id,comment) VALUES($1, $2, $3) returning id";
const getRequest =" SELECT s.name AS errand , concat(u.name ,' ', u.surname) AS client_name, comment, concat(a.street_address,', ', a.suburb,', ',  a.city,', ',  a.postal_code) AS address, r.id  FROM request r,users u, service s, address a WHERE r.client_id=u.id AND r.service_id = s.id AND a.request_id=r.id AND r.status = 'pending' ";
const getMaxId ="SELECT id FROM request WHERE client_id= $1 ORDER BY id DESC LIMIT 1";
const getRequestByClientId ="SELECT s.name AS errand , concat(u.name ,' ', u.surname) AS runner_name, comment, concat(a.street_address,', ', a.suburb,', ',  a.city,', ',  a.postal_code) AS address, status FROM request r,users u, service s, address a WHERE r.runner_id=u.id AND r.service_id = s.id AND a.request_id=r.id AND client_id =$1";
const getRequestByRunnerId ="SELECT s.name AS errand , concat(u.name ,' ', u.surname) AS client_name, concat(a.street_address,', ', a.suburb,', ',  a.city,', ',  a.postal_code) AS address, status FROM request r,users u, service s, address a WHERE r.client_id=u.id AND r.service_id = s.id AND a.request_id=r.id AND runner_id =$1";

const updateClient ="UPDATE users SET cell_no=$1, password=$2, name =$3, surname=$4, updated_at=current_date WHERE id = $5";
const getAllClients = "SELECT * FROM users WHERE role ='Client' AND is_active = 'true' ";
const getAllRunners= "SELECT * FROM users WHERE role ='Service provider' AND is_active = 'true' ";

const addComment = "UPDATE request SET comment = $1 WHERE id=$2";

const getRunnerEarnings = "SELECT s.name AS errand , concat(u.name ,' ', u.surname) AS client_name, cost FROM request r,users u, service s WHERE r.client_id=u.id AND r.service_id = s.id AND runner_id =$1"
const getTotal = " SELECT SUM(cost) AS total FROM request r, service s WHERE s.id =r.service_id AND r.runner_id=$1 ";

const getReviews = " SELECT s.name AS errand, CONCAT(u.name,' ',u.surname) AS client_name, reason, rating FROM service s, users u, review r, request rq WHERE u.id=r.client_id AND r.request_id=rq.id AND s.id=r.id AND r.runner_id=$1 ";
const totalRating = " select avg(rating) from review where runner_id=$1 ";

const totalClients = " SELECT COUNT(*) AS clients FROM users WHERE role ='Client' ";
const totalRunners = " SELECT COUNT(*) AS runners FROM users WHERE role ='Service provider' ";

const acceptRequest = " UPDATE request SET status='Accepted', runner_id=$1 WHERE id=$2 ";
const rateServices = " INSERT INTO review (runner_id, client_id, rating, reason, request_id) VALUES($1, $2, $3, $4, $5) ";

const runnerRequests =  " SELECT * FROM users WHERE is_active =false ";

module.exports ={
   
    addClient,
    addRunner,
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
    updateStatus,
    

    addRequest,
    getRequest,
    getRequestByRunnerId,
    getRequestByClientId,

    updateClient,
    getAllClients,
    getAllRunners,

    addComment,
    getMaxId,
    getRunnerEarnings,
    getTotal,

    getReviews,
    totalRating,

    totalRunners,
    totalClients,
    acceptRequest,

    rateServices,
    runnerRequests

    
};
