var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var Users = require('./routes/Users')
const routes = require("./routes/apiRoutes")
var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/users', Users)

// allergenius
app.use(routes)

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})