/** @jsx React.DOM */

var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Router = Backbone.Router;

module.exports = Router.extend({
  routes: {
    "/app": "index",
  },
  index: function(args) {
    debugger
  },
  show: function(product_id){
    console.log("product_id", product_id);
    debugger
    var product = products.get(product_id);

    product.items.fetch().done(function(items){
      console.log(items);
      var itemsElement = $("div", {class: "items-list"});
      React.renderComponent(<Items items={items} />, itemsElement);
    });
  }
});
