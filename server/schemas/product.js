const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().required(),
  amount: Joi.string().required(),
  image: Joi.string(),
  description: Joi.string().required(),
  price: Joi.string().required(),
})

module.exports = productSchema;