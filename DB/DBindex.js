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

// const getAllQuestions = (cb) => {
//     connection.query("SELECT * FROM Questions", (err, data) =>{  //selects all from the students table in the schema
//         if(err){  
//             console.log("Questions not good")                                            //using an error first callback
//             cb(err, null)
//         }else{
//             console.log("Questions good")
//             cb(null, data)
//         }
//     })
// }

module.exports = { 
    getAllReviews,
    getAllQuestions,
};
