const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
var db = require("./DB/DBindex.js");

var path = require("path");
const app = express();
const port = 3010;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "/src")));

app.get("/similar", function (req, res) {
  console.log("hello");
  db.retrieveAllSimilarItems((err, data) => {
    if (err) {
      console.log("error in server");
      res.status(405).send(data);
    } else {
      console.log("All similar items");
      res.status(200).send(data);
    }
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
