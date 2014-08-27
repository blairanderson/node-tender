/**
 * Created by blairanderson on 8/20/14.
 */


var domReady = require('domready');
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

appDB.config({
  name        : 'sprintly',
  version     : 1.0,
  size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
  storeName   : 'User/Products/Items/Store',
  description : 'A Storage for some important sprint.ly ojects'
});

var SignupForm = require("./forms/me.js");
var Me = require('./models/me.js');


domReady(function(){

  var appContainer = document.getElementById("app-container");

  appDB.getItem('me', function(me){

    if (me && me.username && me.api_key){
      // TODO: Finish all README TODOs before implementing this.
      app.models.products = new ProductsCollection();
      app.views.products = new ProductsListView({collection: products});

    } else {

      var signupForm = new SignupForm({
        model: new Me()
//        onSubmit: function (value) {
//          appDB.set("me", {
//            username: value.username,
//            api_key: value.api_key
//          }, function () {return document.location.reload(true);})
//        }
      });

      signupForm.render();
      appContainer.innerHTML = signupForm.el.innerHTML;
    }
  });
});

