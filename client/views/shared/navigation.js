var template = require('../../templates/shared/navigation.hbs');

module.exports = Backbone.View.extend({
  template: template,
  events: {
    "click .logout": "logout"
  },

  render: function () {
    if (!this.el) {
      this.el = document.createElement('div');
    }

    this.$el.html(this.template());
    return this
  },

  logout: function (e) {
    e.preventDefault();
    window.localforage.removeItem("session",function(){
      window.location.reload();
    });
  }
});
