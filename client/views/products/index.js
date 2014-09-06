/** @jsx React.DOM */

var React = require('react');
var _ = require('lodash');

var List = require('../../component/List');
var Items = require('../../component/Items');

module.exports = function (opts){
  var productAttrs = _(opts.products.models).map(function(product){
    return _.pick(product.attributes, "id", "name", "created_at")
  }).sortBy("created_at").value();

  React.renderComponent(<List products={productAttrs} />, opts.el);
}
