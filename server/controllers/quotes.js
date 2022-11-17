const pseudoModelQuote = require("../utils/pseudoModel");

const randomQuoteController = async (req, res) => {

    try {
        let totalCount = await pseudoModelQuote.pseudoModelQuote.countDocuments({}).exec();
        randomInt = Math.floor(Math.random() * totalCount);
        quote = await pseudoModelQuote.pseudoModelQuote.findOne({}).skip(randomInt);
        res.status(200).json(quote);
    }
    catch (e) {
        res.status(500).send({ "error:": "server error" });
    }

}

const filteredQuotesController = async (req, res) => {
    try{
        const {author, quote, category} = req.query;

        filteredQuotes = await pseudoModelQuote.pseudoModelQuote.find({
            "author": {"$regex": author ? author : ''},
            "quote": {"$regex": quote ? quote : ''},
            "category": {"$regex": category ? category : ''},
        }) 

        res.status(200).json(filteredQuotes);
    }
    catch (e){
        res.status(500).json({ "error:": "server error" });
    }

}

module.exports = {
    randomQuoteController,
    filteredQuotesController,
}