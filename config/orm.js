// DEPENDENCIES
const connection = require("../config/connection.js");

// AN ARRAY OF QUESTION MARKS THE SAME LENGTH AS THE NUMBER OF QUERY VARIABLES
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// ALTERS AN OBJECT TO BE VALID SQL
function objToSql(obj) {
  var arr = [];

  for (var key in obj) {
    var value = obj[key];

    if (Object.hasOwnProperty.call(obj, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

// ORM OBJECT
const orm = {
  all: function (table, callback) {
    let sql = "SELECT * FROM " + table + ";"
    connection.query(sql, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  create: function (table, cols, vals, callback) {
    let sql = "INSERT INTO " + table;
    sql += " (";
    sql += cols.toString();
    sql += ") ";
    sql += "VALUES (";
    sql += printQuestionMarks(vals.length);
    sql += ") "

    console.log(sql);

    connection.query(sql, vals, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  update: function (table, colValue, condition, callback) {
    console.log(colValue);

    let sql = "UPDATE " + table;
    sql += " SET ";
    sql += objToSql(colValue)
    sql += " WHERE ";
    sql += condition;

    console.log(sql);

    connection.query(sql, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  delete: function (table, condition, callback) {
    let sql = "DELETE FROM " + table;
    sql += " WHERE ";
    sql += condition

    console.log(sql);

    connection.query(sql, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  }
}

module.exports = orm;