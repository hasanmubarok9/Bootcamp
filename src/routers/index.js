const express = require('express');
const Router = express.Router();

const product = require('./product');
Router.use('/product', product);


const category = require('./category');
Router.use('/category', category)

const login = require('./login');
Router.use('/user', login)

const cart = require('./cart');
Router.use('/cart', cart)

const payment = require('./payment');
Router.use('/payment', payment)

module.exports = Router;