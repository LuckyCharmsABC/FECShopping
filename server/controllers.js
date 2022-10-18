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
    const requestURL = `${URL}/reviews/${req.body.review_id}/helpful`;
    axios.put(requestURL, req.body, options)
      .then((response) => {
        res.status(201).json(response.data);
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
    const requestURL = `${URL}/reviews/${req.body.review_id}/report`;
    axios.put(requestURL, req.body, options)
      .then((response) => {
        res.status(201).json(response.data);
      }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  addToCart(req, res) {
    const requestURL = `${URL}/cart`;
    console.log(req.body.sku_id);
    axios.post(requestURL, req.body, options)
      .then(() => {
        res.status(201).json('item added to cart');
      }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
};
