const express = require("express");
const JokesApi = require("../controller/jokescontroller")
const router = express.Router();

router.get("/randomjokes",JokesApi.getRandomJokes);


module.exports = router;



