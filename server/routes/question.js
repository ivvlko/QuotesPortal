const express = require("express");
const easyQuestionController = require("../controllers/question");
const router = express.Router();

router.get("/easy-question", easyQuestionController.easyQuestionController)

module.exports = router;