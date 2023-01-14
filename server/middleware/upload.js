const multer = require('multer');
const path = require('path');
const randomId = require('random-id');

const len = 15;

console.log(('Here'));

const tempDir = path.join(__dirname, "../", "temp");

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: multerConfig
});

module.exports = upload;