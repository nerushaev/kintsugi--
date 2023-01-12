const getProducts = require('./getProducts');
const addProduct = require('./addProduct');
const getProductById = require('./getProductById');
const removeProductById = require('./deleteProductById');
const updateProductById = require('./updateProductById');

module.exports = {
  getProducts,
  addProduct,
  getProductById,
  removeProductById,
  updateProductById,
}