const Product = require('../../models/product');

const getProducts = async (req, res) => {
  console.log('req.query', req.query);
  // const { _id: owner } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const count = await Product.countDocuments();
  const skip = (page - 1) * limit;
  const products = await Product.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
  
  res.json({
    products,
    totalPages: Math.ceil(count / limit),
    currentPage: page
  });
};

module.exports = getProducts;