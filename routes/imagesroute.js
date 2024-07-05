const express = require("express");
const imageFunc = require("../controller/imagescontroller")
const router = express.Router();

router.get("/getrandomimages",imageFunc.getRandomImages)


module.exports = router;