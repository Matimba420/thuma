const express =require('express');
const { user } = require('pg/lib/defaults');
const RunnerControllers= require('../controllers/RunnerControllers');
const router= express.router();

router.post('/register',RunnerControllers.register)


module.exports = router