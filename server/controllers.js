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

const getRelated = (req, res) => {
  // console.log(req.query);
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.query.productID}/related`, {
    headers: {
      Authorization: process.env.AUTH_TOKEN,
    },
  })
    .then((result) => {
      // console.log(result);
      res.send(result.data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};

const getRelatedItem = (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.query.productID}`, {
    headers: {
      Authorization: process.env.AUTH_TOKEN,
    },
  })
    .then((result) => {
      // console.log(result);
      res.send(result.data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};

const getRelatedImage = (req, res) => {
  // console.log('Get Image:', req.query);
  if (req.query.productID) {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.query.productID}/styles`, {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    })
      .then((result) => {
        // console.log('Related Image:', result);
        res.send(result.data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  }
};

const getRelatedStars = (req, res) => {
  // console.log('Get Image:', req.query);
  if (req.query.reviewID) {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${req.query.reviewID}`, {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    })
      .then((result) => {
        // console.log('Related Image:', result);
        res.send(result.data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  }
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
exports.getRelated = getRelated;
exports.getRelatedItem = getRelatedItem;
exports.getRelatedImage = getRelatedImage;
exports.getRelatedStars = getRelatedStars;
exports.getQuestions = getQuestions;
exports.postQuestion = postQuestion;
exports.getReviews = getReviews;
