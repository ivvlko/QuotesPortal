const express = require("express");
const router = express.Router();

const gameControllers = require("../controllers/game");

router.post("/save-game", gameControllers.saveGameController);
  
module.exports = router;