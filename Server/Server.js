const express = require('express');
const bodyParser = require('body-parser');
const db = require('../DB/DBindex.js');
const path = require('path');
const app = express();
const port = "3001";


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

  app.post('/api/Reviews', function (req, res) {
    db.postReviews(req.body.singleName, req.body.singleReview,(err, data) => {          
      if(err){                                
        console.log('Reviews post to DB error');
        res.sendStatus(404)
      }else{
        console.log('Reviews post submitted');
        res.sendStatus(200);
      }
    })
  });

  app.post('/api/Questions', function (req, res) {
    db.postQuestion(req.body.singleName,req.body.singleQuestion,(err, data) => {          
      if(err){                                
        console.log('Questions post to DB error');
        res.status(404).send(data);
      }else{
        console.log('Questions post submitted');
        res.status(200).send(data);
      }
    })
  });

app.listen(port, function() {
    console.log('listening on port 3001!');
  });
  