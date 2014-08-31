/**
 * Created by blairanderson on 8/20/14.
 */

// database
var appDB = window.localforage;

// events
var domReady = require('domready');

// views
var SignupForm = require("./forms/session.js");

// models
var Session = require('./models/session.js');
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

domReady(function(){

  var appContainer = document.getElementById("app-container");

  appDB.getItem('session', function(session){

    if (session && session.username && session.api_key){
      // TODO: Finish all README TODOs before implementing this.
      // app.models.products = new ProductsCollection();
      // app.views.products = new ProductsListView({collection: products});

    } else {

      var signupForm = new SignupForm({
        model: new Session()
      });

      signupForm.render();

      appContainer.innerHTML = signupForm.el.outerHTML;
    }
  });
});

