require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// middleware

// logging and parsing
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// serve up client files
app.use(express.static(path.join(__dirname, '../client/dist')));

// routes/controllers will utilize client requests and communicate with the API here.

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`server listening at http://localhost:${port}`);