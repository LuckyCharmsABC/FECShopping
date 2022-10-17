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
    const requestURL = `${URL}/products/${req.body.id}`;
    axios.get(requestURL, options)
      .then((response) => {
        res.status(200).json(response.data);
      }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  getAll(req, res) {
    console.log(req);
    const requestURL = `${URL}/products`
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
  getRelated(req, res) {
    const requestURL = `${URL}/products/${req.body.id}/related`
    axios.get(requestURL, options)
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => console.log(err));
  },
};
