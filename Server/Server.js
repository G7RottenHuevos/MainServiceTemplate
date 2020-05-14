var express = require('express');
var bodyParser = require('body-parser');
var db = require('../DB/DBindex.js');
var path = require('path')
var app = express();
var port = "3001";


app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use(express.static(path.join(__dirname + '/../react-client/dist')));

app.get('/api/Reviews', function (req, res) {
  db.getAllReviews((err, data) => {          
    if(err){                                
      console.log('Reviews DB error');
      res.status(404).send(data);
    }else{
      console.log('Reviews Returned');
      res.status(200).send(data);
    }
  })
});

app.get('/api/Questions', function (req, res) {
    db.getAllQuestions((err, data) => {           
      if(err){                                   
        console.log('Question DB error');
        res.status(404).send(data);
      }else{
        console.log('Questions Returned');
        res.status(200).send(data);
      }
    })
  });

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

app.listen(port, function() {
    console.log('listening on port 3001!');
  });
  