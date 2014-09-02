/**
 * Created by blairanderson on 8/20/14.
 */

// database
var appDB = window.localforage;

// views
var SignupForm = require("./forms/session.js");

// models
var Session = require('./models/session.js');
var sprintly = require('sprintly');
/**
 * With localForage, we use callbacks:
 *  => localforage.setItem('key', 'value', doSomethingElse);
 *
 * Similarly, please don't expect a return value from calls to localforage.getItem(). Instead, use a callback:
 *  => localforage.getItem("me", function(me){
 *      console.log(me)
 *     });
 */

appDB.config({
  name        : 'sprintly',
  version     : 1.0,
  size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
  storeName   : 'User/Products/Items/Store',
  description : 'A Storage for some important sprint.ly ojects'
});

$(function(){

  var appContainer = document.getElementById("app-container");
  var App = {};

  appDB.getItem('session', function(session){
    if (session && session.email && session.api_key){
      debugger
      session = new Session(session);

      session.authenticate(function(err, res){
        if (err) {
          console.log(err);
          debugger
          // show error!
        } else {
          App.products = res.products;
          debugger
        }
      });
      // TODO: Finish all README TODOs before implementing this.
      // app.models.products = new ProductsCollection();
      // app.views.products = new ProductsListView({collection: products});

    } else {
      var signupForm = new SignupForm({
        model: appDB,
        el: appContainer
      });
      signupForm.render();
    }
  });
});
