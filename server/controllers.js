require('dotenv').config();
const axios = require('axios');
const _ = require('underscore');

const URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

const options = {
  headers: {
    Authorization: `${process.env.TOKEN}`,
  },
};

module.exports = {
  getProduct(req, res) {
    const requestURL = `${URL}/products/${req.query.id}`;
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
    const params = _.extend(options, { params: req.query });
    axios.get(requestURL, params)
      .then((response) => {
        res.status(200).json(response.data);
      }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  getReviewData(req, res) {
    const requestURL = `${URL}/reviews/meta`;
    const params = _.extend(options, { params: req.query });
    axios.get(requestURL, params)
      .then((response) => {
        res.status(200).json(response.data);
      }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  addReview(req, res) {
    const requestURL = `${URL}/reviews`;
    axios.post(requestURL, req.body, options)
      .then((response) => {
        res.status(201).json(response.data);
      }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  markHelpful(req, res) {
    const requestURL = `${URL}/reviews/${req.body.review_id}/helpful`;
    axios.put(requestURL, req.body, options)
      .then((response) => {
        res.status(201).json(response.data);
      }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  report(req, res) {
    const requestURL = `${URL}/reviews/${req.body.review_id}/report`;
    axios.put(requestURL, req.body, options)
      .then((response) => {
        res.status(201).json(response.data);
      }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
};
