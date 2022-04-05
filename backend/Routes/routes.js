const {Router} = require('express');
const controller = require('../controllers/controller')
const router = Router();

router.post('/clients', controller.addClient);
router.get('/clients', controller.getClient);
router.get('/clients/:id', controller.getClientById);
router.delete('/clients/:id', controller.removeClient);
router.get('/clients/login/:email', controller.getClientByEmail);
router.post('/clients/login',controller.clientLogin);

router.get('/services', controller.getServices);
router.post('/services', controller.addServices);

router.post('/address', controller.addAddress);
router.get('/address', controller.getAddress); 

//router.put('/updateStatus', controller.updateStatus);



module.exports= router;