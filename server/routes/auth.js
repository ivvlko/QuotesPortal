const express = require("express");
const router = express.Router();

const authControllers = require("../controllers/auth");

router.post("/signup", authControllers.signupController);
router.post("/login", authControllers.loginController);
  
module.exports = router;