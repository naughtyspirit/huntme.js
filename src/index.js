var Request = require('request-promise')
var Querystring = require('querystring')

var HuntMe = function(apiKey) {
    this.config = {
        createLink: "http://api.hnt.me/links?accessToken=" + apiKey
    }

    return this
}

/**
 * Creates new short link pointing to different links depending on the user device
 * Example:
 *  yield huntMe.createLink([
 *      {url: "facebook.com", platform: "default"}, 
 *      {url: "market://details?id=com.facebook.katana", platform: "android"}
 *  ])
 *
 * @param links - Must contain platform: "default" link e.g. see Example
 */
HuntMe.prototype.createLink = function* (links) {

    payload = {links: links}
    var options = {
        uri: this.config.createLink,
        method: "POST",
        json: true,
        body: payload
    }
    return yield Request(options)
}

module.exports = HuntMe
