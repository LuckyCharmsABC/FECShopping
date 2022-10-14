require('dotenv').config();
const axios = require('axios');

var URL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp"


var options = {
  headers:{
    'Authorization': `${process.env.TOKEN}`
  },
}

module.exports = {
  getProduct: function (req, res) {
    let requestURL = `${URL}/products/${req.body.id}`
    axios.get(requestURL, options)
    .then((response)=>{
      res.status(200).json(response.data)
    }).catch((err)=>{
      console.log(err);
      res.sendStatus(500);
    })
  }
}