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

router.post('/address', controller.addAddress);
router.get('/address', controller.getAddress); 

//router.put('/updateStatus', controller.updateStatus);
router.post('/requests', controller.addRequest);
router.get('/requests', controller.getRequest);
router.get('/requests/client/:client_id', controller.getRequestByClientId);
router.get('/requests/runner/:runner_id', controller.getRequestByRunnerId);


 router.put('/clients/:id',controller.updateClient);




 


module.exports= router;