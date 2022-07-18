const axios = require('axios');
require('dotenv').config();

axios.defaults.headers.common.Authorization = process.env.AUTH_TOKEN;

module.exports.getProducts = (req, res) => {
  const productId = req.query.ID || null;
  console.log(productId);
  axios({
    method: 'get',
    url: productId ? `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}` : 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products',
  })
    .then((result) => {
      console.log('result', result.data);
      res.send(result.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
};

module.exports.getStyles = (req, res) => {
  const productId = req.query.product_id || 40348;
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/styles`,
  })
    .then((result) => {
      console.log('getStyles result data: ', result.data);
      res.send(result.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
};
