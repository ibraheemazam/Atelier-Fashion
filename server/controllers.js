const axios = require('axios');
require('dotenv').config();

axios.defaults.headers.common.Authorization = process.env.AUTH_TOKEN;

const getProducts = (req, res) => {
  const productId = req.query || null;
  axios({
    method: 'get',
    url: productId ? `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}` : 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products',
  })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
};

const getStyles= (req, res) => {
  const productId = req.query || null;
  axios({
    method: 'get',
    url: productId ? `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/styles` : 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products',
  })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
};

const getQuestions = (req, res) => {
  axios
    .get(
      'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions',
      {
        params: {
          product_id: req.query.product_id,
          count: req.query.count || 5,
        },
      },
    )
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const postQuestion = (req, res) => {
  console.log(req.body);
  const postBody = {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
    product_id: req.body.product_id,
  };

  axios
    .post(
      'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions',
      postBody,
    )
    .then((result) => {
      res.status(201).send(result.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
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
}

const postAnswer = (req, res) => {
  // send all information in body
  const questionID = req.body.question_ID;
  const postBody = {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
    photos: req.body.photos,
  };

  axios
    .post(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${questionID}/answers`,
      postBody,
    )
    .then((result) => {
      res.status(201).send(result.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const helpfulQuestion = (req, res) => {
  const questionID = req.body.question_id;

  axios
    .put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${questionID}/helpful`,
    )
    .then((result) => {
      res.status(204).send(result.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const reportQuestion = (req, res) => {
  const { questionID } = req.body;

  axios
    .put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${questionID}/report`,
    )
    .then((result) => {
      res.status(204).send(result.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const helpfulAnswer = (req, res) => {
  console.log(req.body);
  const answerID = req.body.answer_id;

  axios
    .put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${answerID}/helpful`,
    )
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const reportAnswer = (req, res) => {
  const answerID = req.body.answer_id;

  axios
    .put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${answerID}/report`,
    )
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};



exports.getProducts = getProducts;
exports.getStyles = getStyles;
exports.getQuestions = getQuestions;
exports.postQuestion = postQuestion;
exports.helpfulQuestion = helpfulQuestion;
exports.reportQuestion = reportQuestion;
exports.postAnswer = postAnswer;
exports.helpfulAnswer = helpfulAnswer;
exports.reportAnswer = reportAnswer;
exports.getReviews = getReviews;
exports.getReviewsMeta = getReviewsMeta;
exports.postReview = postReview;
exports.putReviewHelpful = putReviewHelpful;
exports.putReviewReport = putReviewReport;
