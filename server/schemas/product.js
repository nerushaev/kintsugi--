const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().required(),
  amount: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.string().required(),
  id: Joi.string(),
})

module.exports = productSchema;