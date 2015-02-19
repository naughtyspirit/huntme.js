var Request = require('request-promise')
var Querystring = require('querystring')

var HuntMe = function(apiKey) {
    this.config = {
        apiKey: apiKey,
        createLink: "http://api.hnt.me/links"
    }

    return this
}

HuntMe.prototype.createLink = function* createLink(link, platform) {
    payload = [{
        url: link,
        platform: platform}]
    var options = {
        uri: this.config.createLink,
        method: "POST",
        json: true,
        body: payload
    }
    return yield Request(options)
}

module.exports = HuntMe
