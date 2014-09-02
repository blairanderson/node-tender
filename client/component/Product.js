/** @jsx React.DOM */
var React = require('react');

module.exports =  React.createClass({
  displayName: "Product",
  render: function () {
    return <div className="list-item-container">
      <a href={'#' + this.props.product.id}>
        <h3>{this.props.product.name} - ID:{this.props.product.id}</h3>
        <span>{this.props.product.created_at}</span>
      </a>
    </div>;
  }
});