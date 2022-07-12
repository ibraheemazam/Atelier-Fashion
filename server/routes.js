const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.get('/products', controllers.getProducts);

router.get('/questions', controllers.getQuestions);
router.post('/questions', controllers.postQuestion);
// router.put('/questions/helpful', controllers.helpfulQuestion);
// router.put('/questions/report', controllers.reportQuestion);

// router.post('/answer', controllers.postAnswer);
// router.put('/answer/helpful', controllers.helpfulAnswer);
// router.put('/answer/report', controllers.reportAnswer);

router.get('/reviews', controllers.getReviews);

module.exports = router;
