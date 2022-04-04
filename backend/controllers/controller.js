const pool = require('../db');
const queries = require('../queries/queries')
const Pool = require('pg').Pool;
const nodemailer = require('nodemailer');


const addClient = async (req,res) => {
   // const {firstname, lastname, cell_no, password} = req.body;
    const {name, surname, cell_no, email, password} = req.body
    if( toString(password).length<8){
        res.status(400).json('Your Password should be longer than 7 characters');
    }else{

      

        //check if email exists
        pool.query(queries.checkClientCelllExists, [cell_no], (error, results) => {
            
            if (results.rows.length){
                res.status(409).json({error:"Cell number Already exists"});
                
            }else{
                pool.query(queries.addClient, 
                    [name,surname, cell_no, email, password],
                    (error,results)=>{
                    if(error){ 
                        res.status(500).json({error: 'invalid input'})
                        throw error;
                    }else{
                        addUserMailer(name, surname, cell_no, email, password);
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
        res.status(200).json(results.rows)
    });
};

const getClientById=(req,res) =>{
    const id =parseInt(req.params.id);
    


    pool.query(queries.getClientById,[id],(error, results)=>{
        if(!results) return res.status(400).send("invalid input")
        if(!results.rows.length){ 
            res.status(404).send('user not found')
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

//LOGIN PART OF CLIENT AND ADMIN


//login client

const clientLogin =async (req,res) =>{
    const {email} = req.body;
    const {cell_no}=req.body;
    const {password} = req.body;
   
    pool.query(queries.checkClientCelllExists, [cell_no], (error, results)=> {
        if (!results.rows.length){
            res.status(404).json({error:"cell number does not exist in the database"});
        }else{
               console.log(password);
               console.log(results.rows[0].password)
        pool.query(queries.getClientPasswordByEmail,[email],(error,results)=>{
            console.log(results.rows[0].password);
            const queryPassword= bcrypt.compareSync(password, results.rows[0].password);
            console.log(queryPassword)
            if(!queryPassword){
                res.status(404).json({error:"Invalid password or cell number"});
            }else{
                res.status(200).json(results.rows);
                console.log(queryPassword)
            }
            
            //console.log(results)
        });  
    }
    }) 
};


// Admin login

const adminLogin =async (req,res) =>{
    const {email} = req.body;
    const {cell_no}=req.body;
    const {password} = req.body;
   
    
    pool.query(queries.checkClientCelllExists, [cell_no], (error, results) => {
        if (!results.rows.length){
            res.status(404).json({error:"cell number does not exist in the database"});
        }else{
            console.log(password);
            pool.query(queries.getAdminPasswordByEmail,[email],(error,results)=>{
                console.log(results.rows[0]);
                const queryPassword= bcrypt.compareSync(password, results.rows[0].password);
                if(!queryPassword){
                    res.status(404).json({error:"Invalid password or cell number"});
                }else{
                    res.status(200).json(results.rows);
                    console.log(queryPassword)
                }
                
                //console.log(results)
            });  
    }
    }) 
};

const getAdmins = (req, res) => {
    pool.query(queries.getAdmins,(error, results) => {
        if(this.error){
            console.log("error:"+error);
            res.status(404).json(error);
            throw error;
        }
        res.status(200).json(results.rows)
    });
};

const getAdminById=(req,res) =>{
    const id =parseInt(req.params.id);


    pool.query(queries.getAdminById,[id],(error, results)=>{
        if(!results) return res.status(400).send("invalid input")
        if(!results.rows.length){ 
            res.status(404).json({error:'user not found'});
            //throw error
        }else{
            res.status(200).json(results.rows);
        }
    } );
};


module.exports = {
    addClient,
    getClient,
    removeClient,
    getClientById,
    getAdminById,
    getAdmins,
    adminLogin,
    clientLogin,
    getClientByEmail

}