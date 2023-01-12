const Product = require('../../models/product');

const addProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.json({
    status: "success",
      code: 201,
      data: {
        product
      }
  })
};

module.exports = addProduct;