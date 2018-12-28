const express = require('express')
const bodyParser = require('body-parser')
// const proxy = require('express-http-proxy')

const PORT = process.env.PORT || 8080

const app = express()

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('assets'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log('Server listening on: http://localhost:' + PORT)
  })
  