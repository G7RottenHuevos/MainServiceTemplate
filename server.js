const express = require("express");
var bodyParser = require("body-parser");
var db = require("./DB/DBindex.js");
var path = require("path");
const app = express();
const port = 3010;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/../react-client/dist")));

// app.get("/", (req, res) => res.send("Hello World"));

app.get("/", function (req, res) {
  db.retrieveAllSimilarItems((err, data) => {
    //calls the getAllStudents function
    if (err) {
      //error first callback
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

// app.get('/api/preferences/:id/preferences', function (req, res) { //get request for the make random function
//     db.getAllPreferences((err, data) => {
//    // groups.makeRandom((err, data) => {                                      //calls make random function
//       if(err){                                //error first callback
//         console.log('error in random');
//         res.status(406).send(data);
//       }else{
//         console.log('random g2g');
//         res.status(200).send(data);
//       }
//     })
//   });

// app.listen(port, function() {
//     console.log('listening on port 3010!');
//   });
