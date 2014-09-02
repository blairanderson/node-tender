// database
var appDB = window.localforage;
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var sprintly = require('sprintly');


module.exports = Backbone.Model.extend({
  url: "https://sprint.ly/products.json",
  authenticate: function(callback){
    var self = this;
    var email = self.get("email");// your actual username
    var api_key = self.get("api_key");// your actual password
    this.sprintly = sprintly.createClient(email, api_key)
    this.sprintly.products.fetch().done(function(products){
      callback(null, {
        email: email,
        api_key: api_key,
        products: products
      })
      console.log(products);
    }, callback);
  }
});
