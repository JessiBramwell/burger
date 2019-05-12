// DEPENDENCIES
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// ROUTES
// queries all burgers and passes data to the view
router.get("/", function (req, res) {
  burger.all(function (data) {

    var viewObj = {
      burgers: data
    };
    res.render("index", viewObj)
  });
});

// inserts a new item into the datatable 
router.post("/api/burgers", function (req, res) {
  burger.create(["burger_name", "eaten"], [req.body.name, req.body.eaten], function (result) {

      res.json({ id: result.insertId });
    });
});

// updates an item based on id
router.put("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;

  burger.update({ eaten: req.body.eaten }, condition, function (result) {
    if (result.changedRows == 0) {
      return res.status(400).end()
    } else {
      return res.status(200).end();
    }
  });
});

// deletes an item based on id
router.delete("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    }
    else {
      return res.status(200).end();
    }
  });
});

module.exports = router