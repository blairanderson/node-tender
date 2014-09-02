/** @jsx React.DOM */


var React = require('react');
var _ = require('lodash');
var List = require('../../component/List');

module.exports = function (opts){
  var products = _(opts.products.models).map( function(product){
    return _.pick(product.attributes, "id", "name", "created_at")
  }).sortBy("id").value();
  React.renderComponent(<List products={products} />, opts.el);
}
