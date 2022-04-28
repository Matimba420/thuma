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
    }else if(cell_no.length>10){
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
                const salt = bcrypt.genSaltSync(10)
                const hashedPassword = bcrypt.hashSync(password , salt)
                console.log(hashedPassword)
                pool.query(queries.addClient, 
                    [name,surname, cell_no, email, hashedPassword,role],
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


const addRunner = async (req,res) => {
    // const {firstname, lastname, cell_no, password} = req.body;
     const {name, surname, cell_no, email, password, role} = req.body
     if(name.length<3){
         res.status(400).json({error:"Name cannont be less than 2 characters"});
     }else if(surname.length<3){
         res.status(400).json({error:"Surname cannont be less than 2 characters"});
     }else if(cell_no.length>0 && cell_no.length<10){
         res.status(400).json({error:"Invalid Cell number"});
     }else if(cell_no.length>10){
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
                 const salt = bcrypt.genSaltSync(10)
                 const hashedPassword = bcrypt.hashSync(password , salt)
                 console.log(hashedPassword)
                 pool.query(queries.addRunner, 
                     [name,surname, cell_no, email, hashedPassword,role],
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
        if(error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const getClientById=(req,res) =>{
    const id =parseInt(req.params.id);
    



    pool.query(queries.getClientById,[id],(error, results)=>{
        if(!results){
            return res.status(400).send("invalid input");
        }
        if(!results.rows.length){ 
            res.status(404).send('user not found');
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

const clientLogin = async (req,res) =>{
    const { cell_no,email, password } = req.body;
    pool.query(queries.checkClientEmailCellNoExists,[email,cell_no],(error, results)=>{
        // console.log(results)
        
        if(!results.rows.length){ 
            console.log(email)
            res.status(404).json({error:'user not found'})
        }else{
            
            // IF CELLPHONE IS ENTERED
            if(cell_no){

                pool.query(queries.getClientPasswordByCelllNo,[cell_no],(error, results)=>{
                    console.log(results.rows[0].password)
                    const queryPassword= bcrypt.compareSync(password, results.rows[0].password);
                    if(!queryPassword){
                        res.status(404).json({error:'Invalid credentials'});
                    }else{
                        res.status(200).json(results.rows);
                    }
                });

            } else {

                // IF EMAIL IS ENTERED
                pool.query(queries.getClientPasswordByEmail,[email],(error, results)=>{
                    console.log(results.rows[0].password)
                    const queryPassword= bcrypt.compareSync(password, results.rows[0].password);
                    if(!queryPassword){
                        res.status(404).json({error:'Invalid credentials'});
                    }else{
                        res.status(200).json(results.rows);
                    }
                });

            }

           

        }

    });
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
     const {street_address, suburb, city, postal_code, request_id} = req.body
     console.log(request_id);
            pool.query(queries.addAddress, 
                [street_address, suburb, city, postal_code, request_id],
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
   
     const {client_id,service_id,comment} = req.body
    
            pool.query(queries.addRequest, 
                [client_id,service_id,comment],
                (error,results)=>{
                if(error){ 
                    res.status(500).json({error: 'invalid input'})
                    throw error;
                }else{
    
                    res.status(201).json("Request created successfully");
                }
            });
        
    
    
}

const getRequest = (req, res) => {
    pool.query(queries.getRequest,(error, results) => {
        if(error){
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
    const {password} = req.body;
    const {name} = req.body;
    const {surname} = req.body;

    
  
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
            
    
            pool.query(queries.updateClient,[cell_no, passwordHash, name, surname,id],(error,results) =>{
                if (error) throw error;
                res.status(200).send("User updated successfully")
            });
            }
        });
    }   
};

const cancelRequest= async (req,res)=>{
    const id = req.params.id;
    const {name } = "";
    const {client_id } = "";
    pool.query(queries.cancelRequest,[name,id],(error,results)=>{
        if(error){ 
            console.status(404).json({error:'bad response '})
            throw error;
        }else{
            mailer('matimbamanyondos@Gmail.com')
            res.status(201).json("Request cancelled");
        }
    });
};

//get users by roles
const getAllClients = (req, res) => {
    pool.query(queries.getAllClients,(error, results) => {
        if(this.error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const getAllRunners = (req, res) => {
    pool.query(queries.getAllRunners,(error, results) => {
        if(this.error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const updateStatus = async (req,res) =>{
    const id = req.params.id;
    const {status } = req.body;
    pool.query(queries.updateStatus,[status,id],(error, results) =>{
        if(this.error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json("Status updated succesfully");
    });
};


const addComment = async (req,res) =>{
    const id = req.params.id;
    const {comment } = req.body;
    pool.query(queries.addComment,[comment,id],(error, results) =>{
        if(this.error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json("Comment added succesfully");
    });
};

const getMaxId = async (req, res) => {
    const client_id=req.params.client_id

    console.log(req.params);
    pool.query(queries.getMaxId,[client_id],(error, results) => {
        if(error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error; 
        }
        res.status(200).json(results.rows);
    });
};

const getRunnerEarnings =(req,res) =>{
    const runner_id = req.params.runner_id;
    // console.log(client_id)
   


    pool.query(queries.getRunnerEarnings,[runner_id],(error, results)=>{
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


const getTotal =(req,res) =>{
    const runner_id = req.params.runner_id;
    // console.log(client_id)
   


    pool.query(queries.getTotal,[runner_id],(error, results)=>{
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

const getReviews =(req,res) =>{
    const runner_id = req.params.runner_id;
    // console.log(client_id)
   


    pool.query(queries.getReviews,[runner_id],(error, results)=>{
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

const totalRating =(req,res) =>{
    const runner_id = req.params.runner_id;
    // console.log(client_id)
   


    pool.query(queries.totalRating,[runner_id],(error, results)=>{
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



const totalClients = (req, res) => {
    pool.query(queries.totalClients,(error, results) => {
        if(error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json(results.rows);
    });
};


const totalRunners = (req, res) => {
    pool.query(queries.totalRunners,(error, results) => {
        if(error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json(results.rows);
    });
};


const acceptRequest = async (req,res) =>{
    const {runner_id} = req.body;
    const {id} = req.body;
    pool.query(queries.acceptRequest,[runner_id,id],(error, results) =>{
        if(error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json("Request accepted succesfully");
    });
};

const rateServices = async (req,res) =>{
    const {runner_id} = req.body;
    const {client_id } = req.body;
    const {rating} = req.body;
    const {reason} = req.body;
    const {request_id } = req.body;
    pool.query(queries.rateServices,[runner_id,client_id,rating, reason,request_id ],(error, results) =>{
        if(error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json("Review added succesfully");
    });
};

const runnerRequests = (req, res) => {
    pool.query(queries.runnerRequests,(error, results) => {
        if(error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

 
const deactivate = async (req, res) => {
    const { id } = req.params;

    try{
        const deletedUser = await pool.query('UPDATE users set is_active = false WHERE id = $1', [id]);

        if(deletedUser.rowCount){
            res.status(200).json({
                message: 'User successfully Deactivated.'
            });
        }else{
            res.status(400).json({
                message: 'User you seek to deactivate does not exist.'
            });
        }

    }catch(err){
        console.log(err)
        res.status(503).json({
            message: "Internal server error",
            error:err
        })
    }
}


module.exports = {
    addClient,
    addRunner,
    getClient,
    removeClient,
    getClientById,
    getClientByEmail,
    clientLogin,

    getServices,
    addServices,
    addAddress,
    getAddress,
    updateStatus,

    addRequest,
    getRequest,
    getRequestByClientId,
    getRequestByRunnerId,

    updateClient,

    cancelRequest,
    getAllRunners,
    getAllClients,

    addComment,
    getMaxId,
    getRunnerEarnings,
    getTotal,

    getReviews,
    totalRating,

    totalClients,
    totalRunners,

    acceptRequest,
    rateServices,
    runnerRequests,
    deactivate

    
}
