var express = require('express');
var bodyParser = require('body-parser');
var searchResults = require('../DB/DBindex')
var db = require('../database-mysql/index.js');
var path = require('path')
var app = express();
var port = 6969;


app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use(express.static(path.join(__dirname + '/../react-client/dist')));

app.get('/api/autofill', function (req, res) {
  queries.searchResults((err, data)=> {
    if(err){
      console.log('rip')
      res.status(400).send(err);
    } else {
      console.log('skillz')
      res.status(200).send(data)
    }
  })
});

app.listen(port, function() {
    console.log(`listening on port ${PORT}`);
  });
  