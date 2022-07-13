const axios = require('axios');
require('dotenv').config();

axios.defaults.headers.common.Authorization = process.env.AUTH_TOKEN;

module.exports.getProducts = (req, res) => {
  const productId = req.query.ID || null;
  axios({
    method: 'get',
    url: productId ? `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}` : 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products',
  })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
};
module.exports.getStyles = (req, res) => {
  const productId = req.query.ID || null;
  axios({
    method: 'get',
    url: productId ? `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/styles` : 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products',
  })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

