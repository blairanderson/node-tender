/** @jsx React.DOM */
var Item = require('./Item');
var React = require('react');

module.exports = React.createClass({
  render: function () {

    return <div>
            {
              this.props.items.map(function (item) {
               return <Item key={item.id} item={item} />
              })
             }
    </div>;
  }
})
