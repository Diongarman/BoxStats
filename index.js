const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const Joi = require('joi');
const config = require('config')
const morgan = require('morgan')
const helment = require('helmet')

let mongoose = require('./db/mongoose.js');


const predictions = require('./routes/predictions');
const user = require('./routes/user');


app.use(express.json());
app.use('/api/predictions', predictions);
app.use('/api/user', user)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})





