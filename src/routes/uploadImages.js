const { Router } = require("express");
const router = Router();


const {
  upload,
  storage
} = require("../controllers/uploadImages.js");


router.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
      return res.status(400).send('No se ha cargado ningún archivo.');
    }
    res.send(`Archivo cargado correctamente: <a href="/uploads/${req.file.filename}">${req.file.filename}</a>`);
  });
  


module.exports = router;