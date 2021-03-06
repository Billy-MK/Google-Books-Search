const express = require("express");
const path = require("path");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const db = require("./models")
const dotenv = require("dotenv");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/api/allBooks", function (req, res) {
  console.log()
  db.Book
    .find()
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})

app.use(routes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
