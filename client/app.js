/** @jsx React.DOM */

var appDB = window.localforage;

var React = require('react');
var _ = require('lodash');

var SignupForm = require("./forms/session.js");
var List = require('./component/List');


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
  name: 'sprintly',
  version: 1.0,
  size: 4980736, // Size of database, in bytes. WebSQL-only for now.
  storeName: 'User/Products/Items/Store',
  description: 'A Storage for some important sprint.ly ojects'
});

$(function () {

  var appContainer = document.getElementById("app-container");
  var App = {};

  appDB.getItem('session', function (session) {
    if (session && session.email && session.api_key) {

      session = new Session(session);
      session.authenticate(function (err, res) {
        if (err) {
          console.log(err);
          // show error!
          // delete session
        } else {
          App.products = res.products;
          var products = _(App.products.models).map( function(product){
            return _.pick(product.attributes, "id", "name", "created_at")
          }).sortBy("id").value();

          React.renderComponent(<List products={products} />, appContainer);
        }
      });

    } else {

      var signupForm = new SignupForm({
        model: appDB,
        el: appContainer
      });

      signupForm.render();
    }
  });
});
