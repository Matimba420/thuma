const pool = require('../db');
const queries = require('../queries/queries')
const Pool = require('pg').Pool;
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs')


const addClient = async (req,res) => {
   // const {firstname, lastname, cell_no, password} = req.body;
    const {name, surname, cell_no, email, password, role} = req.body
    if(name.length<3){
        res.status(400).json({error:"Name cannont be less than 2 characters"});
    }else if(surname.length<3){
        res.status(400).json({error:"Surname cannont be less than 2 characters"});
    }else if(cell_no.length>0 && cell_no.length<10){
        res.status(400).json({error:"Invalid Cell number"});
    }else if(password.length<8){
        res.status(400).json('Your Password should be longer than 7 characters');
    }else if(role.length<1){
        res.status(400).json('Please enter your role');
    }else{

        //check if email exists
        pool.query(queries.checkClientCelllExists, [cell_no], (error, results) => {
            
            if (results.rows.length){
                res.status(409).json({error:"Cell number Already exists"});
                
            }else{
                pool.query(queries.addClient, 
                    [name,surname, cell_no, email, password,role],
                    (error,results)=>{
                    if(error){ 
                        res.status(500).json({error: 'invalid input'})
                        throw error;
                    }else{
                        // addUserMailer(name, surname, cell_no, email, password);
                        res.status(201).json("User created successfully");
                    }
                });
            }
        });
    
    }
}

const getClient = (req, res) => {
    pool.query(queries.getClients,(error, results) => {
        if(this.error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const getClientById=(req,res) =>{
    const id =parseInt(req.params.client_id);
    
    console.log('hello2');


    pool.query(queries.getClientById,[client_id],(error, results)=>{
        if(!results) return res.status(400).send("invalid input")
        console.log('hello1');
        if(!results.rows.length){ 
            res.status(404).send('user not found')
            console.log('hello');
            //throw error
        }else{
            res.status(200).json(results.rows);
        }
    } );
};


const removeClient = (req, res) =>{
    const id =parseInt(req.params.id);

    pool.query(queries.getClientById,[id],(error, results)=>{
        const noUserfound = !results.rows.length;
        if(noUserfound){
            res.status(404).json("User does not exist in the database.");
        }else{
            pool.query(queries.removeClient,[id],(error, results)=>{
                if(error) throw error;
                res.status(200).json("user removed successfully");
        });
        }
    });
}
 

const getClientByEmail=(req,res) =>{
    const email = req.params.email;
    console.log(email)
   


    pool.query(queries.getClientByEmail,[email],(error, results)=>{
        if(!results) return res.status(400).send("invalid input")
       
        if(!results.rows.length){ 
            res.status(404).send('user not found')
            console.log(results.rows);
            
            //throw error
        }else{
            res.status(200).json(results.rows);
        }
    } );
};

const clientLogin =async (req,res) =>{
    const {email} = req.body;
    const {password} = req.body;
   
    
    
    pool.query(queries.checkClientEmailExists, [email], (error, results) => {
        if (!results.rows.length){
            res.status(404).json({error:"email does not exist in the database"});
        }else{
               console.log(password);
               console.log(results.rows[0].password)
        pool.query(queries.getClientPasswordByEmail,[email],(error,results)=>{
            console.log(results.rows[0].password);
            //const queryPassword= bcrypt.compareSync(password, results.rows[0].password);
            console.log(queryPassword)
            if(!queryPassword){
                res.status(404).json({error:"Invalid password or email"});
            }else{
                res.status(200).json(results.rows);
                console.log(queryPassword)
            }
            
            
        });  
    }
    }) 
}


const getServices = (req, res) => {
    pool.query(queries.getServices,(error, results) => {
        if(this.error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json(results.rows);
    });
};


const addServices = async (req,res) => {
    // const {firstname, lastname, cell_no, password} = req.body;
     const {name,description, cost, image } = req.body
     pool.query(queries.checkServiceExist , [name], (error, results) => {
            
        if (results.rows.length){
            res.status(409).json({error:"Service Already exists"});
            
        }else{
            pool.query(queries.addServices, 
                [name,description, cost, image],
                (error,results)=>{
                if(error){ 
                    res.status(500).json({error: 'invalid input'})
                    throw error;
                }else{
                         // addUserMailer(name, surname, cell_no, email, password);
                    res.status(201).json("Service created successfully");
                }
            });
        }
    
    });
}

const addAddress = async (req,res) => {
    // const {firstname, lastname, cell_no, password} = req.body;
     const {street_address, surburb, city, postal_code} = req.body
     
            pool.query(queries.addAddress, 
                [street_address, surburb, city, postal_code],
                (error,results)=>{
                if(error){ 
                    res.status(500).json({error: 'invalid input'})
                    throw error;
                }else{
                         // addUserMailer(name, surname, cell_no, email, password);
                    res.status(201).json("Address created successfully");
                }
            });
}


const getAddress = (req, res) => {
    pool.query(queries.getAddress,(error, results) => {
        if(this.error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

// const updateStatus = (req, res) => {
//     const id = parseInt(req.params.id);
//     const {status} = req.body;

//     pool.query(queries.updateStatus,[id, status],(error,results) => {
//         if(error) throw error;
//         res.status(200).send("Status updated succefully")

//     })
// }
        

     
const addRequest = async (req,res) => {
    // const {firstname, lastname, cell_no, password} = req.body;
     const {client_id,service_id,comment} = req.body
    
            pool.query(queries.addRequest, 
                [client_id,service_id,comment],
                (error,results)=>{
                if(error){ 
                    res.status(500).json({error: 'invalid input'})
                    throw error;
                }else{
                         // addUserMailer(name, surname, cell_no, email, password);
                    res.status(201).json("Request created successfully");
                }
            });
        
    
    
}

const getRequest = (req, res) => {
    pool.query(queries.getRequest,(error, results) => {
        if(this.error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json(results.rows);
    });
};


const getRequestByClientId=(req,res) =>{
    const client_id = req.params.client_id;
    // console.log(client_id)
   


    pool.query(queries.getRequestByClientId,[client_id],(error, results)=>{
        if(!results) return res.status(400).send("invalid input")
       
        if(!results.rows.length){ 
            res.status(404).send('request not found')
            console.log(results.rows);
            
            //throw error
        }else{
            res.status(200).json(results.rows);
        }
    } );
};

const getRequestByRunnerId =(req,res) =>{
    const runner_id = req.params.runner_id;
    // console.log(client_id)
   


    pool.query(queries.getRequestByRunnerId,[runner_id],(error, results)=>{
        if(!results) return res.status(400).send("invalid input")
       
        if(!results.rows.length){ 
            res.status(404).send('request not found')
            console.log(results.rows);
            
            //throw error
        }else{
            res.status(200).json(results.rows);
        }
    } );
};


const updateClient = async (req,res) =>{
    const id = req.params.id;
    const {cell_no } = req.body;
    const {password} = req.body

    
  
    if(password.length<8){
        res.status(400).send('Your Password should be longer than 7 characters');
    }else{
        
        const salt= await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
        pool.query(queries.getClientById,[id],(error, results)=>{
            const noUserfound = !results.rows.length;
            if(noUserfound){
                res.send("User does not exist in the database.");
            }else{
            
    
            pool.query(queries.updateClient,[cell_no, passwordHash,id],(error,results) =>{
                if (error) throw error;
                res.status(200).send("User updated successfully")
            });
            }
        });
    }   
};



module.exports = {
    addClient,
    getClient,
    removeClient,
    getClientById,
    getClientByEmail,
    clientLogin,

    getServices,
    addServices,
    addAddress,
    getAddress,
    //updateStatus

    addRequest,
    getRequest,
    getRequestByClientId,
    getRequestByRunnerId,

    updateClient
    
}
