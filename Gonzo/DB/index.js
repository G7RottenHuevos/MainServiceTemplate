const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);

connection.connect();

const getAllItems = function(cb) {
    connection.query('SELECT * FROM masks;', (err, data) => {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}

module.exports = {  
    getAllItems,
   
};