const {Router} = require('express');
const controller = require('../controllers/controller')
const router = Router();

router.post('/clients', controller.addClient);
router.get('/clients', controller.getClient);
router.post('/clients/login', controller.clientLogin);
router.get('/clients/:id', controller.getClientById);
router.delete('/clients/:id', controller.removeClient);
router.get('/clients/login/:email', controller.getClientByEmail);

router.get('/services', controller.getServices);
router.post('/services', controller.addServices);



module.exports= router;