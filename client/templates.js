this["JST"] = this["JST"] || {};

this["JST"]["./client/templates/forms/signup.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form>\n  <input type=\"text\" placeholder=\"email\" name=\"email\">\n  <input type=\"text\" placeholder=\"api_key\" name=\"api_key\">\n  <input type=\"submit\" value=\"Go\" class=\"btn btn-default full-width\">\n</form>\n<div id=\"error\" class=\"error\"></div>\n";
  });

this["JST"]["./client/templates/shared/navigation.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<a class=\"logout\" href=\"#logout\">logout</a>\n";
  });