/** @jsx React.DOM */
var Product = require('./Product');
var React = require('react');

module.exports = React.createClass({
  render: function () {

    return <div>
            {
              this.props.products.map(function (product) {
               return <Product key={product.id} product={product} />
              })
             }
    </div>;
  }
})