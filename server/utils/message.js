var generateMessage = function (from, text) {

    return {
        from,
        text,
        createdAt: new Date().getTime()
    }


}


var generateLocationMessage = function (from, lat,lng) {

    return {
        from,
        url:`https://www.google.com.ua/maps?q=${lat},${lng}`,
        createdAt: new Date().getTime()
    }


}


module.exports = {generateMessage,generateLocationMessage}