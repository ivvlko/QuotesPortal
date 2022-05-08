const express = require("express");
const quotesControllers = require("../controllers/quotes");
const router = express.Router();

router.get('/random-quote', quotesControllers.randomQuoteController);
router.get('/filtered-quotes', quotesControllers.filteredQuotesController);

module.exports = router;