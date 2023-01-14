const Product = require('../../models/product');

const getProducts = async (req, res) => {
  // const { _id: owner } = req.user;
  // const { page = 1, limit = 10, category = ["Перука", "Костюм", "Аксессуар", "Іньше"] } = req.query;
  // const { category = ["Перука", "Костюм", "Аксессуар", "Іньше"] } = req.query;
  // const skip = (page - 1) * limit;
  const products = await Product.find();
  console.log(products);
  res.json(products);
};

module.exports = getProducts;