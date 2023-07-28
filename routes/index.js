const express = require('express');

const router = express.Router();


router.use('/products', require('./productRoutes')); // use product routes


module.exports = router;