const Product = require('../../models/product');

const getProductById = async (req, res) => {
  const { productId } = req.params;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  
  const product = await Product.findById(productId);

  if (!product) {
    throw NotFound(`Contact with id=${productId} not found...`);
  }
  
    res.json({
      status: "success",
      code: 200,
      data: {
        result: product
      }
    })
};

module.exports = getProductById;