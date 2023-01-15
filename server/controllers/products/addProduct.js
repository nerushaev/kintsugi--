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
  console.log(req.body);
  console.log(req.file);
  const { path: tempUpload, originalname } = req.file;

  const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };
  
  const result = await cloudinary.uploader.upload(tempUpload, options);
  

  // const image = await Jimp.read(tempUpload);
  // image.resize(250, 250).write(tempUpload);

  // const filename = `${randomId()}_${originalname}`;
  // const resultUpload = path.join(avatarsDir, filename);
  // await fs.rename(tempUpload, resultUpload);
  // const avatarURL = path.join("productsImage", filename);

  const product = await Product.create({...req.body, image: result.url});

  res.json(product)
};

module.exports = addProduct;
