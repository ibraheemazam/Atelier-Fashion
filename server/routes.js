const express = require('express');
const router = express.Router();
const controllers = require('./controllers.js');

router.get('/products', controllers.getProducts);

router.get('/related', controllers.getRelated);

router.post('/', controllers.getReviews);

module.exports = router;
