// DEPENDENCIES
var orm = require("../config/orm.js");

// burger object
var burger = {
  all: function (callback) {
    orm.all("burgers", function (res) {
      callback(res);
    });
  },
  create: function (cols, vals, callback) {
    orm.create("burgers", cols, vals, function (res) {
      callback(res);
    });
  },
  update: function (colValues, condition, callback) {
    orm.update("burgers", colValues, condition, function (res) {
      callback(res);
    });
  },
  delete: function (condition, callback) {
    orm.delete("burgers", condition, function (res) {
      callback(res)
    });
  }
}

module.exports = burger;