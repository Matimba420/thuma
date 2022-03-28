
   
// [labe mean-docker/express-server/routes/api.js]
const express = require('express');
const router = express.Router();

// GET api listing.
router.get('/', (req, res) => {
    res.send('api works');
});

module.exports = router;