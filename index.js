const express = require('express');
const app = express();
const Joi = require('joi');
const config = require('config')
const morgan = require('morgan')
const helment = require('helmet')

app.get('/', (req, res) => {})