const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pseudoModelQuote = mongoose.model('quotesDB',
    new Schema({
        quote: String,
        author: String,
        category: String,
        id: Number
    }),
    
    'quotesDB');

module.exports = {
    pseudoModelQuote,
    }