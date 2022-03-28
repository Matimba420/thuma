const express =require('express');
const { user } = require('pg/lib/defaults');
const userControllers= require('../controllers/userController');
const router= express.router();

router.post('/register',userControllers.register)

module.exports = router