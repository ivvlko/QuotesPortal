const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pseudoModel = mongoose.model('quotesDB',
    new Schema({
        quote: String,
        author: String,
        category: String,
        id: Number
    }),
    
    'quotesDB');

router.get('/random-quote', async (req, res) => {

    try {
        let totalCount = await pseudoModel.countDocuments({}).exec();
        randomInt = Math.floor(Math.random() * totalCount);
        quote = await pseudoModel.findOne({}).skip(randomInt);
        res.status(200).json(quote);
    }
    catch (e) {
        res.status(500).send({ "error:": "server error" });
    }

})

router.get('/filtered-quotes', async (req, res) => {
    try{
        const {author, quote, category} = req.query;

        filteredQuotes = await pseudoModel.find({
            "author": {"$regex": author ? author : ''},
            "quote": {"$regex": quote ? quote : ''},
            "category": {"$regex": category ? category : ''},
        }) 

        res.status(200).json(filteredQuotes);
    }
    catch (e){
        res.status(500).json({ "error:": "server error" });
    }

})


module.exports = router;