const express =require('express');
const { user } = require('pg/lib/defaults');
const clientControllers= require('../controllers/userController');
const router= express.router();

router.post('/register',clientControllers.register)

module.exports = router