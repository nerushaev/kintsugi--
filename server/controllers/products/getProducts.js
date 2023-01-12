const Product = require('../../models/product');

const getProducts = async (req, res) => {
  // const { _id: owner } = req.user;
  const { page = 1, limit = 10, category = ["Wigs", "Wife"] } = req.query;
  const skip = (page - 1) * limit;
  console.log(req);
  const products = await Product.find({category});
  
    res.json({
      status: "success",
      code: 200,
      data: {
        result: products
      }
    })
};

module.exports = getProducts;