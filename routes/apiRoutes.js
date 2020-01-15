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
  app.post("/api/notes", function(req, res) {
    fs.readFile(db, function(err, data) {
      if (err) throw err;
      var note = JSON.parse(data);
      note.push(req.body);
      fs.writeFile(db, JSON.stringify(note), function(err) {
        if (err) throw err;
        console.log(note);
        res.json(note);
      });
    });
  });

  // API DELETE Requests
  app.delete("/api/notes/:id", function(req, res) {
    fs.readFile(db, function(err, data) {
      if (err) throw err;
      var note = JSON.parse(data);
      note.splice(req.params.id, 1);
      fs.writeFile(db, JSON.stringify(note), function(err) {
        if (err) throw err;
        res.json(note);
      });
    });
  });
};
