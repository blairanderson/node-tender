var appDB = window.localforage;
/**
 * With localForage, we use callbacks:
 *  => localforage.setItem('key', 'value', doSomethingElse);
 *
 * Similarly, please don't expect a return value from calls to localforage.getItem(). Instead, use a callback:
 *  => localforage.getItem("me", function(me){
 *      console.log(me)
 *     });
 */

var SignupForm = require("./forms/session.js");
var Navigation = require("./views/shared/navigation");
var ProductsIndex = require('./views/products/index');

var Router = require('./router');

var Session = require('./models/session.js');
var sprintly = require('sprintly');

$(function () {

  var appContainer = document.getElementById("app-container");
  var App = {};

  appDB.getItem('session', function (session) {

    if (session && session.email && session.api_key) {
      new Session(session).authenticate(function (err, res) {

        if (err) {
          console.log(err);
          // show error!
          // delete session
        } else {
          //TODO: pass these things to the router
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


    } else {

      var signupForm = new SignupForm({el: appContainer});
      signupForm.render();
    }
  });
});

appDB.config({
  name: 'sprintly',
  version: 1.0,
  size: 4980736, // Size of database, in bytes. WebSQL-only for now.
  storeName: 'User/Products/Items/Store',
  description: 'A Storage for some important sprint.ly ojects'
});
