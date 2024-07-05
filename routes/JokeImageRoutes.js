const express = require("express");
const JokeandImageFun = require("../controller/JokeImageController")
const router = express.Router();

router.get("/RandomJokeRandomImage",JokeandImageFun)



module.exports = router;
