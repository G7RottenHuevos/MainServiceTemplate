var mysql = require('mysql');
var mysqlConfig = require('./config.js');
var connection = mysql.createConnection(mysqlConfig);

/*
const *funcName* = (cb) => {
    connection.query("SELECT * FROM *Table*", (err, data) =>{  //selects all from the students table in the schema
        if(err){                                              //using an error first callback
            cb(err, null)
        }else{
            cb(null, data)
        }
    })
}

const *funcName* = (cb) => {
    connection.query("SELECT * FROM *Table*", (err, data) =>{  //selects all from the students table in the schema
        if(err){  
            console.log("db not good")                                            //using an error first callback
            cb(err, null)
        }else{
            console.log("db good")
            cb(null, data)
        }
    })
}
*/
module.exports = {  //exports this function
};
