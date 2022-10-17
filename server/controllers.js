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
    axios.get(requestURL, options)
      .then((response) => {
        res.status(200).json(response.data);
      }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
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
