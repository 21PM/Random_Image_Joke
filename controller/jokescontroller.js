const JokesData = require("../model/jokesmodel")

const getRandomJokes = (req,res)=>{
    let randomNum = Math.floor(Math.random()*JokesData.length);

    
        res.status(200).json({
            id:randomNum,
            Joke:JokesData[randomNum].joke
        })
}

const JokesApi = {
    getRandomJokes  
}


module.exports = JokesApi;