const pseudoModelQuote = require("../utils/pseudoModel");


const easyQuestionController = async (req, res) => {
    try{
        let question = {};

        let totalCount = await pseudoModelQuote.pseudoModelQuote.countDocuments({}).exec();
        randomInt = Math.floor(Math.random() * totalCount);
        quote = await pseudoModelQuote.pseudoModelQuote.findOne({}).skip(randomInt);

        question["quote"] = quote.quote;
        question["correctAnswer"] = quote.author.split(",")[0];
        question["incorrectAnswers"] = [];
        
        for (let i = 0; i < 3; i++){
            randomInt = Math.floor(Math.random() * totalCount);
            quote = await pseudoModelQuote.pseudoModelQuote.findOne({}).skip(randomInt);
            question["incorrectAnswers"].push(quote.author.split(",")[0]);
        }

        res.status(200).json(question);
    }

    catch (error){
        res.status(500).send({ "error:": "server error" });
    }
}

module.exports = {
    easyQuestionController,
}