const Product = require('../../models/product');

const addProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.json(product)
};

module.exports = addProduct;