var template = require('../templates/forms/signup.hbs');
var Session = require('../models/session');
var _ = require('underscore');

module.exports = Backbone.View.extend({
  template: template,
  events: {
    "submit form": "submitCallback"
  },

  render: function () {
    if (!this.el) {
      this.el = document.createElement('div');
    }

    this.$el.html(this.template());
    return this
  },

  submitCallback: function (e) {
    e.preventDefault();

    var fields = {}, session;

    _.each($(e.currentTarget).serializeArray(), function (input) {
      fields[input.name] = input.value
    });

    session = new Session(fields);

    session.authenticate(function (err, res) {
      if (err) {
        console.log(err);
        debugger
        // show error!
      } else {
        var session = {
          email: res.email,
          api_key: res.api_key
        };
        window.localforage.setItem('session', session, function () {
          window.location.reload()
        });
      }
    });
  }
});
