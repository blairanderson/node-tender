var Backbone = require('backbone');
Backbone.$ = window.$;
var Handlebars = require('handlebars');

var template = Handlebars.compile(
  ['<div class="jumbotron">',
    '<div class="container">',
    '<span class="glyphicon glyphicon-list-alt"></span>',
    '<div class="box">',
    '<input type="text" placeholder="username">',
    '<input type="password" placeholder="password">',
    '<input type="submit" value="Go" class="btn btn-default full-width">',
    '</div>',
    '</div>',
    '</div>'].join("\n")
);

module.exports = Backbone.View.extend({
  template: template,
  events: {
    "click button": "submitCallback"
  },

  render: function () {
    if (!this.el) {
      this.el = document.createElement('div');
    }
    this.el.innerHTML = template();
  },

  validCallback: function (valid) {
    if (valid) {
      console.log('The form is valid!');
    } else {
      console.log('The form is not valid!');
    }
  },
  submitCallback: function (obj) {
    console.log('form submitted! Your data:', obj);
  }
});

