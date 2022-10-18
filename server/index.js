require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const controllers = require('./controllers');

const app = express();

// middleware

// logging and parsing
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// serve up client files
app.use(express.static(path.join(__dirname, '../client/dist')));

// routes/controllers will utilize client requests and communicate with the API here.
app.get('/product', controllers.getProduct);
app.get('/reviewsdata', controllers.getReviewData);

app.route('/reviews')
  .get(controllers.getReviews)
  .post((req, res) => {
    // TODO: Create handler in controllers
    console.log('added a new review');
    res.sendStatus(201);
  })
  .put((req, res) => {
    // TODO: Create handler in controllers
    console.log('marked a review as helpful / reported a review');
    res.sendStatus(204);
  });

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`server listening at http://localhost:${port}`);
