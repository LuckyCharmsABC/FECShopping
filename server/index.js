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
app.get('/products', controllers.getAll);
app.get('/products/:id/related', controllers.getRelated);
app.post('/interactions', controllers.addInteraction);
app.get('/productstyles', controllers.getStyles);
app.get('/cart', controllers.getCart);
app.post('/cart', controllers.addToCart);

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`server listening at http://localhost:${port}`);
