const express = require('express');
const route = express.Router();
const {
  getAllProducts,
  getOneProduct,
} = require('../controller/productController');

route.get('/', getAllProducts);
route.get('/:id', getOneProduct);

module.exports = route;
