const axios = require('axios');
require('dotenv').config();

const getProducts = (req, res) => {
  const productId = req.query || null;
  axios({
    method: 'get',
    url: productId ? `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}` : 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products',
    headers: {
      Authorization: process.env.AUTH_TOKEN,
    },
  })
    .then((result) => (res.send(result.data)))
    .catch((err) => (res.status(400).send(err)));
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

const getReviews = (req, res) => {

};



exports.getProducts = getProducts;
exports.getQuestions = getQuestions;
exports.postQuestion = postQuestion;
exports.getReviews = getReviews;
