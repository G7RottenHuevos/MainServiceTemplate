var express = require('express');
var bodyParser = require('body-parser');
var db = require('../DB/DBindex.js');
var path = require('path')
var app = express();
var port = "3001";


app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use(express.static(path.join(__dirname, '/../react-client/dist')));

// API Requests

app.get('/api/carousel', (req, res) => {
  db.getAllUrls((err, data) => {
    if (err) {
      console.log("Error : ", err);
      res.status(504).send(err);
    } else {
      console.log("Success! : ", data);
      res.status(200).send(data);
    }
  })
})

app.listen(port, function() {
    console.log(`listening on port ${port}`);
});
  