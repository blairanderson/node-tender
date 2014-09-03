/** @jsx React.DOM */
var React = require('react');

module.exports =  React.createClass({
  displayName: "Item",
  render: function () {
    return <div className="list-item-container">
      <a href={'#' + this.props.item.id}>
        <h3>{this.props.item.name} - ID:{this.props.item.id}</h3>
        <span>{this.props.item.created_at}</span>
      </a>
    </div>;
  }
});
