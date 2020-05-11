var mysql = require("mysql");
var mysqlConfig = require("./config.js");
var connection = mysql.createConnection(mysqlConfig);

const retrieveAllSimilarItems = (cb) => {
  connection.query("SELECT * FROM similar_items", function (error, results) {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};
const retrieveSingleSimilarItems = (id, cb) => {
  connection.query("SELECT * FROM similar_items WHERE id=?", [id], function (
    error,
    results
  ) {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};
const retrieveAllCustomersAlsoBoughtItems = (cb) => {
  connection.query("SELECT * FROM customers_also_bought", function (
    error,
    results
  ) {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};
const retrieveSingleSimilarItems = (id, cb) => {
  connection.query(
    "SELECT * FROM customers_also_bought WHERE id=?",
    [id],
    function (error, results) {
      if (error) {
        cb(error, null);
      } else {
        cb(null, results);
      }
    }
  );
};
module.exports = {
  retrieveAllSimilarItems,
  retrieveSingleSimilarItems,
  retrieveAllCustomersAlsoBoughtItems,
};
