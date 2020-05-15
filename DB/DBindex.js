var mysql = require('mysql');
var mysqlConfig = require('./config.js');
var connection = mysql.createConnection(mysqlConfig);


const getAllReviews = (cb) => {
    connection.query("SELECT * FROM Reviews", (err, data) =>{  //selects all from the students table in the schema
        if(err){  
            console.log("Reviews not good")                                            //using an error first callback
            cb(err, null)
        }else{
            console.log("Reviews good")
            cb(null, data)
        }
    })
}

const getAllQuestions = (cb) => {
    connection.query("SELECT * FROM Questions", (err, data) =>{ 
        if(err){  
            console.log("Questions not good")    
            cb(err, null)                                       
        }else{
            console.log(data)
            cb(null, data)
        }
    })
}

const postReviews = (name, review, cb) => {
    connection.query("INSERT INTO Reviews(name, review) VALUES (? , ?)", [name, review],(err, data) => {
        if(err){  
            console.log("Reviews post to DB error") 
            cb(err, null)                                         
        }else{
            console.log("Reviews post submitted")
            cb(null, data)
        }
    })  
}

const postQuestion = (name, question, cb) => {
    connection.query("INSERT INTO Questions(name, question) VALUES (? , ?)", [name, question],(err, data) => {
        if(err){  
            console.log("Questions post to DB error") 
            cb(err, null)                                         
        }else{
            console.log("Questions post submitted")
            cb(null, data)
        }
    })  
}

module.exports = { 
    getAllReviews,
    getAllQuestions,
    postReviews,
    postQuestion,
};
