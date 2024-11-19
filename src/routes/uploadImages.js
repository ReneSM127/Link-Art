const { Router } = require("express");
const router = Router();


const {
  upload,
  storage,
  pathname
} = require("../controllers/uploadImages.js");


router.post('/upload', pathname);
  


module.exports = router;