const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/auth");
const quotes = require("./routes/quotes");
const InitiateMongoServer = require("./db");

const PORT = process.env.PORT;

InitiateMongoServer();

const app = express();
app.use(bodyParser.json());

app.use("/auth", user);
app.use("/quotes", quotes);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});