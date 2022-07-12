const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.get('/products', controllers.getProducts);

router.get('/questions', controllers.getQuestions);
router.post('/questions', controllers.postQuestion);
router.put('/questions/helpful', controllers.helpfulQuestion);
router.put('/questions/report', controllers.reportQuestion);

router.post('/answers', controllers.postAnswer);
router.put('/answers/helpful', controllers.helpfulAnswer);
router.put('/answers/report', controllers.reportAnswer);

router.post('/', controllers.getReviews);

module.exports = router;

// getQuestion works
// postQuestion works
// helpfulQuestion works
// reportQuestion works

// postAnswer works
// helpfulAnswer
// reportAnswer