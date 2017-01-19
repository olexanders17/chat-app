var socket = io();
socket.on('connect', function () {
    console.log('connected to server from ');
});

socket.on('disconnect', function () {
    console.log('disconnected to server from  browser');
});


socket.on('newMessage', function (newMessage) {
    console.log(" :", "newMessage=", newMessage);
});




