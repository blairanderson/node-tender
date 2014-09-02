this["JST"] = this["JST"] || {};

this["JST"]["./client/templates/forms/signup.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form>\n  <input type=\"text\" placeholder=\"username\" name=\"email\">\n  <input type=\"password\" placeholder=\"password\" name=\"api_key\">\n  <input type=\"submit\" value=\"Go\" class=\"btn btn-default full-width\">\n</form>\n";
  });