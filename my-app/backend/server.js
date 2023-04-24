const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./database/db");

const port = process.env.PORT || 3000;

InitiateMongoServer();
const app = express();
var router = express.Router()

app.use(express.json()); // Utilities for request bodies
app.use(express.urlencoded({ extended: true })); // Utilities for query params

// GET Requests

router.get("/", (req, res) => {
  // homepage
  res.send("stupidDB API");
});

app.use('/', router)

const libraryRouter = require("./routes/library.js");
app.use('/library', libraryRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});