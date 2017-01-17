var express = require('express');
var path = require('path');
var sep = path.sep;
var publicPath = path.join(`${__dirname}${sep}..${sep}public`);
var app = express();

var port = process.env.PORT || 3000;


app.use(express.static(publicPath));


app.get("/", function (req, res) {
    res.sendFile("index.html")
})

app.get("/1", function (req, res) {
    res.send("111");
})

app.listen(port, function () {
    console.log(" :", "3000=", port);
})


