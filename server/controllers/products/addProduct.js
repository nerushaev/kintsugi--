const Product = require('../../models/product');

const fs = require('fs/promises');
const path = require('path');
const Jimp = require('jimp')

const avatarsDir = path.join(__dirname, "../../", "public", "productsImages");

const addProduct = async (req, res) => {
  console.log(req.body);
  // const { name } = req.body;
  // const { path: tempUpload, originalname } = req.file;

  // const image = await Jimp.read(tempUpload);
  // image.resize(250, 250).write(tempUpload);

  // const filename = `${name}_${originalname}`;
  // const resultUpload = path.join(avatarsDir, filename);
  // await fs.rename(tempUpload, resultUpload);
  // const avatarURL = path.join("avatars", filename);
  // console.log(avatarURL);

  const product = await Product.create(req.body);

  res.json(product)
};

module.exports = addProduct;
