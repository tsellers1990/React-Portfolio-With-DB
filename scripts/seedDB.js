const mongoose = require("mongoose");
const db = require("../models");

// This file empties the response collection and inserts the response below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/portfolioResponses"
);

const responseSeed = [
  {
    full_name: "Tymothy Sellers",
    email:"tsellers1990@gmail.com",
    phone:"970-314-3313",
    description: "dbSeeding",
    date: new Date(Date.now())
  },
  {
    full_name: "Tymothy Sellers",
    email:"tsellers1990@gmail.com",
    phone:"970-314-3313",
    description: "dbSeeding",
    date: new Date(Date.now())
  },
  {
    full_name: "Tymothy Sellers",
    email:"tsellers1990@gmail.com",
    phone:"970-314-3313",
    description: "dbSeeding",
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
