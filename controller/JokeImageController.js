const allImagesData = require("../model/imagesmodel")
const allJokesData = require("../model/jokesmodel")

const getRandomImageAndJoke = (req,res)=>{

    const RandomNumber = Math.floor(Math.random()*allImagesData.length)
    
        console.log(RandomNumber);
        res.status(200).json({
            id:RandomNumber,
            image:allImagesData[RandomNumber].url,
            joke:allJokesData[RandomNumber].joke
        })
}

module.exports = getRandomImageAndJoke;