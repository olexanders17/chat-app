var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');


describe("generateMessage", function () {
    it('should generate coorect obj message', function () {

        var from = "alex";
        var text = "hello";


        message = generateMessage(from, text);


        expect(message.createdAt).toBeA("number")
        expect(message).toInclude({
            from: "alex",
            text: "hello"

        })
    })
});


describe("generateLocationMessage", function () {
    it('should generate coorect obj generateLocationMessage', function () {

        var from = "alex";
        var lat = 12;
        var lng = 10;
        var url = "https://www.google.com.ua/maps?q=12,10";

        message = generateLocationMessage(from, lat, lng);

        expect(message.createdAt).toBeA("number")
        expect(message).toInclude({
            from: from,
            url:url

        })
    })
});