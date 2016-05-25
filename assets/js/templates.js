this["troc"] = this["troc"] || {};
this["troc"]["list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n  <li>"
    + alias4(((helper = (helper = helpers.horodateur || (depth0 != null ? depth0.horodateur : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"horodateur","hash":{},"data":data}) : helper)))
    + "</li>\n  <li>"
    + alias4(((helper = (helper = helpers.auteur || (depth0 != null ? depth0.auteur : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"auteur","hash":{},"data":data}) : helper)))
    + "</li>\n  <h1>"
    + alias4(((helper = (helper = helpers.titre || (depth0 != null ? depth0.titre : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titre","hash":{},"data":data}) : helper)))
    + "</h1>\n  <li>"
    + alias4(((helper = (helper = helpers.editeurs || (depth0 != null ? depth0.editeurs : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"editeurs","hash":{},"data":data}) : helper)))
    + "</li>\n  <li>"
    + alias4(((helper = (helper = helpers.ville_impression || (depth0 != null ? depth0.ville_impression : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ville_impression","hash":{},"data":data}) : helper)))
    + "</li>\n  <li>"
    + alias4(((helper = (helper = helpers.annee || (depth0 != null ? depth0.annee : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"annee","hash":{},"data":data}) : helper)))
    + "</li>\n  <li>"
    + alias4(((helper = (helper = helpers.nb_pages || (depth0 != null ? depth0.nb_pages : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nb_pages","hash":{},"data":data}) : helper)))
    + "</li>\n  <li>"
    + alias4(((helper = (helper = helpers.collection || (depth0 != null ? depth0.collection : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"collection","hash":{},"data":data}) : helper)))
    + "</li>\n  <li>"
    + alias4(((helper = (helper = helpers.largeur || (depth0 != null ? depth0.largeur : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"largeur","hash":{},"data":data}) : helper)))
    + "</li>\n  <li>"
    + alias4(((helper = (helper = helpers.hauteur || (depth0 != null ? depth0.hauteur : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hauteur","hash":{},"data":data}) : helper)))
    + "</li>\n  <li>"
    + alias4(((helper = (helper = helpers.nb_ext || (depth0 != null ? depth0.nb_ext : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nb_ext","hash":{},"data":data}) : helper)))
    + "</li>\n  <li>"
    + alias4(((helper = (helper = helpers.technique_impresion || (depth0 != null ? depth0.technique_impresion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"technique_impresion","hash":{},"data":data}) : helper)))
    + "</li>\n  <li>"
    + alias4(((helper = (helper = helpers.mode_colo || (depth0 != null ? depth0.mode_colo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mode_colo","hash":{},"data":data}) : helper)))
    + "</li>\n  <li>"
    + alias4(((helper = (helper = helpers.reliure || (depth0 != null ? depth0.reliure : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reliure","hash":{},"data":data}) : helper)))
    + "</li>\n  <li>"
    + alias4(((helper = (helper = helpers.meme_collection || (depth0 != null ? depth0.meme_collection : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"meme_collection","hash":{},"data":data}) : helper)))
    + "</li>\n  <li>"
    + alias4(((helper = (helper = helpers.meme_auteur || (depth0 != null ? depth0.meme_auteur : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"meme_auteur","hash":{},"data":data}) : helper)))
    + "</li>\n\n  <hr>\n\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return container.escapeExpression(((helper = (helper = helpers.debug || (depth0 != null ? depth0.debug : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"debug","hash":{},"data":data}) : helper)))
    + "\n\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.lines : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});