const axios = require('axios');

const getProducts = function(req, res) {
  // add in code for get request
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', {
    headers: {
      "Authorization": `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`
    }
  })
    .then((result) => {
      console.log(result);
      res.send(result.data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
  // res.sendStatus(211);
};

const getReviews = function(req, res) {
  //add code
};

exports.getProducts = getProducts;
exports.getReviews = getReviews;
