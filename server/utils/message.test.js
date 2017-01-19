var expect = require('expect');
var {generateMessage} = require('./message');


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