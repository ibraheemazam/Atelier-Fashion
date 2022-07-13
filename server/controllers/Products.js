const axios = require('axios');
require('dotenv').config();

axios.defaults.headers.common.Authorization = process.env.AUTH_TOKEN;

module.exports.getProducts = (req, res) => {
  axios
    .get(
      'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products',
    )
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
