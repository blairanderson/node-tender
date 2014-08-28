var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');

module.exports = FormView.extend({
  fields: function () {
    return [
      new InputView({
        label: 'Email',
        name: 'email',
        value: this.model.email || '',
        required: false,
        placeholder: 'Email',
        parent: this
      }),
      new InputView({
        label: 'Api Key',
        name: 'api_key',
        value: this.model.api_key || '',
        required: false,
        placeholder: 'Api Key',
        parent: this
      })
    ];
  }
});