var mysql = require('mysql');
var mysqlConfig = require('./config.js');
var connection = mysql.createConnection(mysqlConfig);

connection.connect(() => console.log('you connected son'))

const searchResults = (callback) => {
    connection.query('select * from header', (err, data) => {
      if(err){
        console.log('big fail')
        callback(err, null);
      } else {
        console.log('big success')
        callback(null, data);
      }
    })
  };


module.exports.searchResults = searchResults
