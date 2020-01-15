// Dependencies
var path = require("path");
const fs = require("fs");

// Data
var db = "./db/db.json";

// Routing
module.exports = function(app) {
  // API GET Requests
  app.get("/api/notes", function(req, res) {
    fs.readFile(db, function(err, data) {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });

  // API POST Requests

  // API DELETE Requests
};
