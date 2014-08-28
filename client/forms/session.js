var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');

module.exports = FormView.extend({
  events: {
    "click input[type='submit']": ""
  },
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
      }),
      new InputView({
        type: 'submit',
        value: 'GO',
        parent: this
      })
    ];
  },
  validCallback: function (valid) {
    if (valid) {
      console.log('The form is valid!');
    } else {
      console.log('The form is not valid!');
    }
  },
  submitCallback: function (obj) {
    debugger
    console.log('form submitted! Your data:', obj);
  }
});