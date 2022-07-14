const axios = require('axios');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

require('dotenv').config();

axios.defaults.headers.common.Authorization = process.env.AUTH_TOKEN;

module.exports.postAnswer = (req, res) => {
  // send all information in body
  const questionID = req.body.question_ID;
  const postBody = {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
    photos: req.body.photos,
  };

  console.log(postBody);
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

module.exports.helpfulAnswer = (req, res) => {
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

module.exports.reportAnswer = (req, res) => {
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

module.exports.uploadFile = async (req, res) => {
  try {
    const file = req.body.image;
    const uploadedResponse = await cloudinary.uploader.upload(file, {
      upload_preset: 'retail-app',
    });
    res.status(201).send(uploadedResponse);
  } catch (err) {
    console.log(err);
  }
};
