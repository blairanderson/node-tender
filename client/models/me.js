// me Model - me.js
var AmpModel = require('ampersand-model');


module.exports = AmpModel.extend({
  props: {
    email: ['string'],
    api_key: ['string']
  }
});