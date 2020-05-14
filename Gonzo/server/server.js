var express = require('express');
var bodyParser = require('body-parser');
var db = require('../DB/index.js');
var path = require('path')
var app = express();
var port = "3100";


app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use(express.static(path.join(__dirname, '/../react-client/dist')));


app.get('/api/item', (req, res) => {
  db.getAllItems((err, item) => {
    if (err) {
      console.log("Error in server", err);
      res.status(504).send(err);
    } else {
      console.log("Success in server", data);
      res.status(200).send(item);
    }
  })
})

app.listen(port, function() {
    console.log(`listening on port ${port}`);
});
  
