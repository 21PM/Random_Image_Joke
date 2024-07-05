const AllimagesData = require("../model/imagesmodel")

const getRandomImages = (req,res) =>{

    const randomNumber = Math.floor(Math.random()*AllimagesData.length)

        res.status(200).json({
            id:randomNumber,
            image:AllimagesData[randomNumber].url
        })
}

const Imagesfunc = {
    getRandomImages
}

module.exports = Imagesfunc;