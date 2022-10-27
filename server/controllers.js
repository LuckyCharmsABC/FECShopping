require('dotenv').config();
const axios = require('axios');
const _ = require('underscore');
const config = require('../config.js');

const URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

const options = {
  headers: {
    Authorization: `${config.TOKEN}`,
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

  getAll(req, res) {
    console.log(req);
    const requestURL = `${URL}/products`;
    axios.get(requestURL, options)
      .then((response) => {
        console.log(response.data);
        res.status(200).send(response.data);
      })
      .catch((err) => {
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
      })
      .catch((err) => console.log(err));
  },

  getRelated(req, res) {
    const requestURL = `${URL}/products/${req.params.id}/related`;
    axios.get(requestURL, options)
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => console.log(err));
  },

  addInteraction(req, res) {
    const requestURL = `${URL}/interactions`;
    axios.post(requestURL, req.body)
      .then((response) => {
        console.log(response.data);
        res.status(201).send(response.data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(422);
      });
  },

  getStyles(req, res) {
    const requestURL = `${URL}/products/${req.query.id}/styles`;
    axios.get(requestURL, options)
      .then((response) => {
        res.status(200).json(response.data);
      }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  markHelpful(req, res) {
    const requestURL = `${URL}/reviews/${req.params.review_id}/helpful`;
    axios.put(requestURL, req.params, options)
      .then(() => {
        res.status(201).json(`marked review ${req.params.review_id} as helpful`);
      }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  getCart(req, res) {
    const requestURL = `${URL}/cart`;
    axios.get(requestURL, options)
      .then((response) => {
        res.status(200).json(response.data);
      }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  report(req, res) {
    const requestURL = `${URL}/reviews/${req.params.review_id}/report`;
    axios.put(requestURL, req.params, options)
      .then((response) => {
        res.status(201).json(response.data);
      }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  addToCart(req, res) {
    const requestURL = `${URL}/cart`;
    const { count } = req.body;
    const skuObj = { sku_id: req.body.sku_id };
    const promises = [];
    console.log(`count is ${count}`);
    for (let i = 1; i <= count; i += 1) {
      console.log(`iteration ${i}`);
      promises.push(
        axios.post(requestURL, skuObj, options));
    }
    Promise.all(promises)
      .then(() => {
        res.status(201).json('item added to cart');
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
};
