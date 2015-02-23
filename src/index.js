var Request = require('request-promise')
var Querystring = require('querystring')

var HuntMe = function(apiKey) {
    this.config = {
        createLink: "http://api.hnt.me/links?accessToken=" + apiKey
    }

    return this
}

HuntMe.prototype.createLink = function* createLink(link, platform) {
    payload = {links: [{
            url: link,
            platform: platform
        }]
    }
    var options = {
        uri: this.config.createLink,
        method: "POST",
        json: true,
        body: payload
    }
    return yield Request(options)
}

module.exports = HuntMe
