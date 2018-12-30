const express = require("express");
const routes = require("./routes/apiRoutes");
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 8080;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// app.use(express.static("client"));
// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});

// app.listen(PORT, function () {
//   // Log (server-side) when our server has started
//   console.log('Server listening on: http://localhost:' + PORT)
// })
