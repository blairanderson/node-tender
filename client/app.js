window.localforage.config({
  name: 'sprintly',
  version: 1.0,
  storeName: 'User/Products/Items/Store',
  description: 'A Storage for some important sprint.ly ojects'
});

var appDB = window.localforage;

// react dev tools
window.React = require('react');

var SignupForm = require("./forms/session.js");
var Navigation = require("./views/shared/navigation");
var ProductsIndex = require('./views/products/index');

var Router = require('./router');

var Session = require('./models/session.js');
var sprintly = require('sprintly');

$(function () {
  var appContainer = document.getElementById("app-container");

  var session = new Session()

  session.authenticate(function (err, res){

    if (err) {
      // users session is not valid.
      new SignupForm({el: appContainer}).render();

    } else {
      var app = ProductsIndex({
        el: appContainer,
        products: res.products
      });

      var nav = new Navigation().render()
      nav.$el.insertBefore(appContainer);

      var router = new Router();

      Backbone.history.start({
        root: '/app',
        silent: false
      });

    }
  });
});
