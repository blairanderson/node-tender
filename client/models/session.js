// database
var appDB = window.localforage;
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var sprintly = require('sprintly');


module.exports = Backbone.Model.extend({
  url: "https://sprint.ly/products.json",

  getSession: function(callback) {
    appDB.getItem("session", function(session){
      if (session && session.email && session.api_key) {
        return callback(null, session);
      } else {
        return callback("Missing Session");
      }
    });
  },

  authenticate: function (callback) {
    var self = this;

    this.getSession(function(err, session){
      if (err) {
        return callback("Session Missing");
      }

      
      sprintly.createClient(session.email, session.api_key).products.fetch().done(function (products) {
        callback(null, {
          email: session.email,
          api_key: session.api_key,
          products: products
        })
        console.log(products);
      }, callback);

    });
  }
});
