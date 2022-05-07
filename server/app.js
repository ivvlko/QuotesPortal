const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/auth");
const auth = require("./middleware/auth");
const InitiateMongoServer = require("./db");

const PORT = process.env.PORT;

InitiateMongoServer();

const app = express();
app.use(bodyParser.json());

app.use("/auth", user);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});