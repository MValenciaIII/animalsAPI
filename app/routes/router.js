//? Import express package
const express = require('express');




const router = express.Router();



router.use('/animals', require('./api/restroutes'))

router.use('/states', require('./api/typeroutes'));

module.exports = router;