const http = require('http');
const express = require('express');
const path = require('path');
const sep = path.sep;
const publicPath = path.join(`${__dirname}${sep}..${sep}public`);
const app = express();
const socketIO = require('socket.io');
var {generateMessage}=require('./utils/message');

const port = process.env.PORT || 3000;


const server = http.createServer(app);
const io = socketIO(server);
io.on('connection', function (socket) {
    console.log('new user connected');

    socket.emit('newMessage', generateMessage("Admin", "Welcome to chat app"));

    socket.broadcast.emit('newMessage', generateMessage("Admin", "new user joined"));


    socket.on('createMessage', function (message, callbback) {
        console.log(" :", "message=", message);


        socket.emit('newMessage', generateMessage(message.from, message.text));


        socket.on('disconnect', function (socket) {
            console.log("disconnected");
        });

        callbback('this is from the server');
    });
});

app.use(express.static(publicPath));


server.listen(port, function () {
    console.log("Server is on port", port);
})



