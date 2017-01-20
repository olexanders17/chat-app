var socket = io();
socket.on('connect', function () {
    console.log('connected to server from ');
});

socket.on('disconnect', function () {
    console.log('disconnected to server from  browser');
});


socket.on('newMessage', function (message) {
    var li = $('<li></li>');
    li.text(`${message.from}:${message.text}`);
    $('#messages').append(li)

});


/*socket.emit("createMessage", {
 from: "Frank",
 text: "Hi"
 }, function (data) {
 console.log("got it", data);
 });*/


$('#message-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit("createMessage", {
        from: "User",
        text: $('[name=message]').val()
    }, function (data) {

    });

})