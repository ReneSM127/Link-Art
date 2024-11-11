const { Router } = require("express");
const router = Router();


const {
  upload,
  storage,
  pathname
} = require("../controllers/uploadImages.js");


router.post('/upload', upload.single('image'), pathname, (req, res) => {
    if (!req.file) {
      return res.status(400).send('No se ha cargado ningún archivo.');
    }
  });
  


module.exports = router;