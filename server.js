const express = require("express");
const bodyParser = require("body-parser");
const config = require('./config/main.js')
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = config.port;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));

// Enable CORS from client-side
// app.use(function(req, res, next) {  
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
//   res.header("Access-Control-Allow-Credentials", "true");
//   next();
// });

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  config.database,
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`Server is now listening on PORT ${PORT}!`);
});
