var express = require('express')
var app = express()
var port = process.env.PORT || 4000;

app.use(express.static('./views/'))
app.listen(port, console.log('Hi! Listening on port: ' + port))
