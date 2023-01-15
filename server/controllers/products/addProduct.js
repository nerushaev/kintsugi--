const Product = require('../../models/product');
const randomId = require('random-id');
const fs = require('fs/promises');
const path = require('path');
const Jimp = require('jimp')
const cloudinary = require('cloudinary').v2;
const avatarsDir = path.join(__dirname, "../../", "public", "productsImages");

cloudinary.config = ({
  secure: true,
});

const addProduct = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;

  const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };
  
  try {
    const result = await cloudinary.uploader.upload(tempUpload, options);
    const product = await Product.create({ ...req.body, image: result.url });
    res.json(product)
    fs.unlink(tempUpload);
  } catch (error) {
    console.log(error.message);
  }
  
  // const result = await cloudinary.uploader.upload(tempUpload, options);
  
  // const product = await Product.create({...req.body, image: result.url});

};

module.exports = addProduct;
