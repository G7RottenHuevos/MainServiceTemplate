const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);

// DB Query Functions...

connection.connect();

// Get the list of image urls
const getAllUrls = function(cb) {
    connection.query('SELECT * FROM mlhimgs', (err, data) => {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}

module.exports = {  //exports this function
    getAllUrls,
    // Next Item
};
