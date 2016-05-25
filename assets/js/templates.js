this["troc"] = this["troc"] || {};
this["troc"]["test"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  <li>"
    + container.escapeExpression(((helper = (helper = helpers.Category || (depth0 != null ? depth0.Category : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"Category","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return container.escapeExpression(((helper = (helper = helpers.debug || (depth0 != null ? depth0.debug : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"debug","hash":{},"data":data}) : helper)))
    + "\n\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.lines : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});