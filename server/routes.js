const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.get('/products', controllers.getProducts);

router.get('/related', controllers.getRelated);
router.get('/relatedItem', controllers.getRelatedItem);
router.get('/relatedImage', controllers.getRelatedImage);
router.get('/relatedStars', controllers.getRelatedStars);
router.get('/questions', controllers.getQuestions);
router.post('/questions', controllers.postQuestion);
router.put('/questions/helpful', controllers.helpfulQuestion);
router.put('/questions/report', controllers.reportQuestion);

router.post('/answers', controllers.postAnswer);
router.put('/answers/helpful', controllers.helpfulAnswer);
router.put('/answers/report', controllers.reportAnswer);

// REVIEW ROUTES:
router.get('/reviews', controllers.getReviews);
router.get('/reviews/meta', controllers.getReviewsMeta);
router.post('/reviews', controllers.postReview);
router.put('/reviews/:review_id/helpful', controllers.putReviewHelpful);
router.put('/reviews/:review_id/report', controllers.putReviewReport);

module.exports = router;

// getQuestion works
// postQuestion works
// helpfulQuestion works
// reportQuestion works

// postAnswer works
// helpfulAnswer
// reportAnswer
