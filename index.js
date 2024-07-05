const express = require("express");
const randomJokesroute = require("./routes/jokesroute")
const randomImageroute = require("./routes/imagesroute")
const randomJokeandImage = require("./routes/JokeImageRoutes")
const app = express();



app.use(randomJokesroute)
app.use(randomImageroute)
app.use(randomJokeandImage)



app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})