/**
 * Created by blairanderson on 8/26/14.
 */

var Handlebars = require('handlebars');
var forms = {
  signup: require("./forms/signup.handlebars")
}

//var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
//  "{{kids.length}} kids:</p>" +
//  "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
//var template = Handlebars.compile(source);
//
//var data = { "name": "Alan", "hometown": "Somewhere, TX",
//  "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
//var result = template(data);

exports.forms = {};
Object.keys(forms).forEach(function (form) {
  exports.forms[form] = Handlebars.compile(forms[form]);
});

module.exports = {
  forms: {
    signup: Handlebars.compile(forms.signup)
  }
};