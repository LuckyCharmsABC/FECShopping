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

// Product Overview
app.get('/products', controllers.getAll);
app.get('/product', controllers.getProduct);
app.get('/cart', controllers.getCart);
app.post('/cart', controllers.addToCart);
app.get('/productstyles', controllers.getStyles);

// Related Items
app.get('/products/:id/related', controllers.getRelated);
app.post('/interactions', controllers.addInteraction);

// Ratings and Reviews
app.get('/reviews/', controllers.getReviews);
app.post('/reviews', controllers.addReview);
app.get('/reviewdata', controllers.getReviewData);
app.put('/reviews/:review_id/helpful', controllers.markHelpful);
app.put('/reviews/:review_id/report', controllers.report);

const port = 3000;

app.listen(port);
console.log(`server listening at http://localhost:${port}`);
