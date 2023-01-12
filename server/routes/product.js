const express = require('express');
const router = express.Router();
const { ctrlWrapper, validation } = require('../middleware');
const { productSchema } = require('../schemas');

const validateMiddleware = validation(productSchema);


const productCtrl = require('../controllers/products');

router.get('/', productCtrl.getProducts);

router.get('/:productId', ctrlWrapper(productCtrl.getProductById));

router.delete('/:productId', ctrlWrapper(productCtrl.removeProductById));

router.post('/', validateMiddleware, ctrlWrapper(productCtrl.addProduct));

router.put('/:productId', ctrlWrapper(productCtrl.updateProductById));

module.exports = router;