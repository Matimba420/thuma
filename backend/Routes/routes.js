const {Router} = require('express');
const controller = require('../controllers/controller')
const router = Router();

router.post('/clients', controller.addClient);
router.post('/runner', controller.addRunner);
router.get('/clients', controller.getClient);
router.post('/clients/login', controller.clientLogin);
router.get('/clients/:id', controller.getClientById);
router.delete('/clients/:id', controller.removeClient);
router.get('/clients/login/:email', controller.getClientByEmail);

router.get('/services', controller.getServices);
router.post('/services', controller.addServices);

router.post('/address', controller.addAddress);
router.get('/address', controller.getAddress); 

router.put('/updateStatus/:id', controller.updateStatus);
router.post('/requests', controller.addRequest);
router.get('/requests', controller.getRequest);
router.get('/maxId/:client_id', controller.getMaxId); 
router.get('/requests/client/:client_id', controller.getRequestByClientId);
router.get('/requests/runner/:runner_id', controller.getRequestByRunnerId);

router.put('/clients/:id',controller.updateClient);

router.get('/client', controller.getAllClients);
router.get('/runner', controller.getAllRunners);

router.put('/requests/:id', controller.addComment);

router.get('/earnings/:runner_id', controller.getRunnerEarnings);
router.get('/total/:runner_id', controller.getTotal);

router.get('/getReviews/:runner_id', controller.getReviews);
router.get('/totalRating/:runner_id', controller.totalRating);

router.get('/totalClients', controller.totalClients);
router.get('/totalRunners', controller.totalRunners);

router.put('/acceptRequest', controller.acceptRequest);

router.post('/rateServices', controller.rateServices);

router.get('/runnerRequests', controller. runnerRequests);

router.put('/deactivate/:id', controller.deactivate);



 

module.exports= router;