require('dotenv').config();
const axios = require('axios');

const URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

const options = {
  headers: {
    Authorization: `${process.env.TOKEN}`,
  },
};

module.exports = {
  getProduct(req, res) {
    const requestURL = `${URL}/products/${req.query.id}`;
    console.log(req);
    axios.get(requestURL, options)
      .then((response) => {
        res.status(200).json(response.data);
      }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  getReviews(req, res) {
    const requestURL = `${URL}/reviews`;
    axios.get(requestURL, options, {
      params: req.body,
    })
      .then((response) => {
        res.status(200).json(response.data);
      }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
};
