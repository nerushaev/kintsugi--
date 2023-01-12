const Product = require('../../models/product');

const updateProductById = async (req, res) => {
  const { productId } = req.params;

  const result = await Product.findByIdAndUpdate(productId, req.body);

    if (!result) {
      throw NotFound(`Contact with id=${productId} not found...`);
    }
  
    res.json({
      status: "success",
      code: 200,
      message: "Product delete",
      data: {
        result
      }
    })
};

module.exports = updateProductById;