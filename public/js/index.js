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

socket.on('newLocationMessage', function (message) {
    var li = $('<li></li>');
    li.text(`${message.from}:`);
    var a = $('<a target="_blank">Get  my currnt location</a>')
    a.attr('href', message.url);
    li.append(a);
    $('#messages').append(li)
});


$('#message-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit("createMessage", {
        from: "User",
        text: $('[name=message]').val()
    }, function (data) {
        $('[name=message]').val("__")
    });

})

var locationButton = $('#send-location');
locationButton.on('click', function () {
    console.log("ssssssssssss");
    if (!navigator.geolocation) {
        return alert("geo not supporterd");
    }

    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(" :", "position=", position.coords.latitude);
        socket.emit("crateLocationMessage", {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        });
    })


})
