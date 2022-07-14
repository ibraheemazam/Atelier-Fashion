const axios = require('axios');
require('dotenv').config();

axios.defaults.headers.common.Authorization = process.env.AUTH_TOKEN;

module.exports.getRelated = (req, res) => {
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

module.exports.getRelatedItem = (req, res) => {
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

module.exports.getRelatedImage = (req, res) => {
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

module.exports.getRelatedStars = (req, res) => {
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
