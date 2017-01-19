var http = require('http');
var express = require('express');
var path = require('path');
var sep = path.sep;
var publicPath = path.join(`${__dirname}${sep}..${sep}public`);
var app = express();
var socketIO = require('socket.io');
var {generateMessage}=require('./utils/message');

var port = process.env.PORT || 3000;

var server = http.createServer(app);
var io = socketIO(server);
io.on('connection', function (socket) {
    console.log('new user connected');

    socket.emit('newMessage', generateMessage("Admin", "Welcome to chat app"));

    socket.broadcast.emit('newMessage', generateMessage("Admin", "new user joined"));


    socket.on('createMessage', function (message) {
        console.log(" :", "message=", message);


        socket.broadcast.emit('newMessage', generateMessage(message.from, message.text));


        socket.on('disconnect', function (socket) {
            console.log("disconnected");
        });


    });
});

app.use(express.static(publicPath));


server.listen(port, function () {
    console.log("Server is on port", port);
})



