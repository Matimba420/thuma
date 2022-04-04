const {Router} = require('express');
const controller = require('../controllers/controller')
const router = Router();

router.post('/clients', controller.addClient);
router.get('/clients', controller.getClient);
router.get('/clients/:id', controller.getClientById);
router.delete('/clients/:id', controller.removeClient);
router.get('/clients/login/:email', controller.getClientByEmail);




module.exports= router;