const mongoose = require("mongoose");
const db = require("../models");

// This file empties the response collection and inserts the response below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/portfolioResponses"
);

const responseSeed = [
  {
    who: "Tymothy Sellers",
    what: "dbSeeding",
    date: new Date(Date.now())
  }
];

db.response
  .remove({})
  .then(() => db.response.collection.insertMany(responseSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
