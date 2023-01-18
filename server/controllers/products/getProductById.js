// const Product = require('../../models/product');
// const mongoose = require('mongoose');

// const getProductById = async (req, res) => {
//   const productsId = req.params;
//   console.log(productsId.productId);
//   const parseData = productsId.productId.split("_id=");
//   const product = await Product.find({
//     '_id': {
//       $in: [
//         elements
//       ]
//     }
//   });
//   if (!product) {
//     throw NotFound(`Contact with id=${elements} not found...`);
//   }
  
//     res.json({result: product})
// };

// module.exports = getProductById;