var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var Users = require('./routes/Users')
const routes = require("./routes/apiRoutes")
var path = require("path")

require('dotenv').config()
var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

// auth
app.use('/users', Users)

// allergenius
app.use(routes)

// HEROKU
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
  });

  
app.listen(port, () => {
    console.log("Server is running on port: " + port)
})