const db = require("../models");

// Defining methods for the responseController
module.exports = {
  create: function(req, res) {
    db.Response
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
