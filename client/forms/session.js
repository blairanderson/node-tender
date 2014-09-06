var template = require('../templates/forms/signup.hbs');
var Session = require('../models/session');
var _ = require('underscore');

module.exports = Backbone.View.extend({
  template: template,
  events: {
    "submit form": "submitForm"
  },

  render: function () {
    if (!this.el) {
      this.el = document.createElement('div');
    }

    this.$el.html(this.template());
    return this
  },

  submitForm: function (e) {
    e.preventDefault();

    var fields = {},
    session,
    self = this;

    _.each($(e.currentTarget).serializeArray(), function (input) {
      fields[input.name] = input.value
    });

    window.localforage.setItem("session", fields, function(){
      session = new Session();

      session.authenticate(function (err, res) {
        if (err) {
          var errEl = document.getElementById("error");
          errEl.innerHTML = err.body.message;
          // show error!
        } else {
          window.location.reload()
        }
      });
    });
  }
});
