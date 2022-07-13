const axios = require('axios');
require('dotenv').config();

const getProducts = (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', {
    headers: {
      Authorization: process.env.AUTH_TOKEN,
    },
  })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const getQuestions = (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', {
    params: {
      product_id: 40348,
    },
    headers: {
      Authorization: process.env.AUTH_TOKEN,
    },
  }).then((result) => {
    res.send(result.data);
  }).catch((err) => {
    res.status(400).send(err);
  });
};

const postQuestion = (req, res) => {
  const postBody = {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
    product_id: req.body.product_id,
  };
  console.log(postBody);

  res.sendStatus(501);
};

// REVIEW CONTROLLERS
const getReviews = (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews', {
    headers: {
      Authorization: process.env.AUTH_TOKEN,
    },
    params: req.query,
  })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      console.error('There was an error in the getReviews controller function:\n', err);
      res.sendStatus(400);
    });
};

const getReviewsMeta = (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta', {
    headers: {
      Authorization: process.env.AUTH_TOKEN,
    },
    params: req.query,
  })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      console.error('There was an error in the getReviewsMeta controller function:\n', err);
      res.sendStatus(400);
    });
};

const postReview = (req, res) => {
  res.sendStatus(501);
};

const putReviewHelpful = (req, res) => {
  console.log(req.params);
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${req.params.review_id}/helpful`, {}, {
    headers: {
      Authorization: process.env.AUTH_TOKEN,
    },
  })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      console.error('There was an error in the putReviewHelpful controller function:\n', err);
      res.sendStatus(400);
    });
};

const putReviewReport = (req, res) => {
  console.log(req.params);
  res.sendStatus(501);
};

exports.getProducts = getProducts;
exports.getQuestions = getQuestions;
exports.postQuestion = postQuestion;
exports.getReviews = getReviews;
exports.getReviewsMeta = getReviewsMeta;
exports.postReview = postReview;
exports.putReviewHelpful = putReviewHelpful;
exports.putReviewReport = putReviewReport;
