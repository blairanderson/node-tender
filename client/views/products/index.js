/** @jsx React.DOM */

var React = require('react');
var _ = require('lodash');
var $ = require('jquery');

var Router = require('../../router');

var List = require('../../component/List');
var Items = require('../../component/Items');


function showSpinner(el){
  var spinner = "Spinner";
  el.innerHTML = spinner;
}

module.exports = function (opts){
  var products = opts.products
  var productAttrs = _(products.models).map(function(product){
      return _.pick(product.attributes, "id", "name", "created_at")
    }).sortBy("created_at").value();

  React.renderComponent(<List products={productAttrs} />, opts.el);
}
