this["troc"] = this["troc"] || {};
this["troc"]["list_exchanges"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<section class=\"page page-default page-exchange page-"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"content\">\n\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  </div>\n</section>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"half half-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n\n      <figure class=\"exchange\">\n\n        <figcaption>\n\n          <h2 class=\"why\">"
    + alias4(((helper = (helper = helpers.pourquoi_cet_echange || (depth0 != null ? depth0.pourquoi_cet_echange : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pourquoi_cet_echange","hash":{},"data":data}) : helper)))
    + "</h2>\n          <p class=\"numero\">\n            <span class=\"hide\" aria-hidden=true>Échange de </span>\n            <span>"
    + alias4(((helper = (helper = helpers.numero_du_livre_1 || (depth0 != null ? depth0.numero_du_livre_1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numero_du_livre_1","hash":{},"data":data}) : helper)))
    + "</span>\n            <span class=\"hide\" aria-hidden=true> avec </span>\n            <span> "
    + alias4(((helper = (helper = helpers.numero_du_livre_2 || (depth0 != null ? depth0.numero_du_livre_2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numero_du_livre_2","hash":{},"data":data}) : helper)))
    + "</span>\n          </p>\n\n        </figcaption>\n\n        <img data-src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" src=\"./assets/img/placeholder.gif\" alt=\"\" />\n\n      </figure>\n\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["troc"]["list_index"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<section class=\"page page-default page-"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"content\">\n\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  </div>\n</section>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "    <div class=\"half half-"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n      <article class=\"book book-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n\n        <figure>\n          <img data-src=\""
    + alias4(((helper = (helper = helpers.nom_image || (depth0 != null ? depth0.nom_image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nom_image","hash":{},"data":data}) : helper)))
    + "\" src=\"./assets/img/placeholder.gif\" alt=\"\" />\n        </figure>\n\n        <div class=\"text\">\n\n          <h3>"
    + alias4(((helper = (helper = helpers.auteur || (depth0 != null ? depth0.auteur : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"auteur","hash":{},"data":data}) : helper)))
    + "</h3>\n          <h2>"
    + alias4(((helper = (helper = helpers.titre || (depth0 != null ? depth0.titre : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titre","hash":{},"data":data}) : helper)))
    + "</h2>\n\n          <p>\n            "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.editeur : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            <span class=\"town\">"
    + alias4(((helper = (helper = helpers.ville_d_impression || (depth0 != null ? depth0.ville_d_impression : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ville_d_impression","hash":{},"data":data}) : helper)))
    + "</span>,\n            <span class=\"year\">"
    + alias4(((helper = (helper = helpers.annee || (depth0 != null ? depth0.annee : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"annee","hash":{},"data":data}) : helper)))
    + "</span>\n          </p>\n          <p><span class=\"pages\">"
    + alias4(((helper = (helper = helpers.nombre_de_pages || (depth0 != null ? depth0.nombre_de_pages : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombre_de_pages","hash":{},"data":data}) : helper)))
    + " pages</span></p>\n          <p><span class=\"dimension\">"
    + alias4(((helper = (helper = helpers.largeur || (depth0 != null ? depth0.largeur : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"largeur","hash":{},"data":data}) : helper)))
    + "×"
    + alias4(((helper = (helper = helpers.hauteur || (depth0 != null ? depth0.hauteur : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hauteur","hash":{},"data":data}) : helper)))
    + " mm</span></p>\n          <p><span class=\"quantity\">"
    + alias4(((helper = (helper = helpers.nombre_d_exemplaires || (depth0 != null ? depth0.nombre_d_exemplaires : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombre_d_exemplaires","hash":{},"data":data}) : helper)))
    + " examplaires</span></p>\n"
    + ((stack1 = (helpers.ifOr || (depth0 && depth0.ifOr) || alias2).call(alias1,(depth0 != null ? depth0.technique_d_impression : depth0),(depth0 != null ? depth0.mode_colorimetrique : depth0),{"name":"ifOr","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.reliure : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n          "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dans_la_meme_collection : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n          "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.du_meme_auteur : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n        </div>\n\n      </article>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"editor\">"
    + container.escapeExpression(((helper = (helper = helpers.editeur || (depth0 != null ? depth0.editeur : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"editeur","hash":{},"data":data}) : helper)))
    + "</span>,";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "          <p>\n            "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.technique_d_impression : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.mode_colorimetrique : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n          </p>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"technics\">impression "
    + container.escapeExpression(((helper = (helper = helpers.technique_d_impression || (depth0 != null ? depth0.technique_d_impression : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"technique_d_impression","hash":{},"data":data}) : helper)))
    + ",</span>";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"color\">"
    + container.escapeExpression(((helper = (helper = helpers.mode_colorimetrique || (depth0 != null ? depth0.mode_colorimetrique : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"mode_colorimetrique","hash":{},"data":data}) : helper)))
    + "</span>";
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p><span class=\"binding\">reliure "
    + container.escapeExpression(((helper = (helper = helpers.reliure || (depth0 != null ? depth0.reliure : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"reliure","hash":{},"data":data}) : helper)))
    + "</span></p>";
},"13":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p><span class=\"same_collection\">dans la même collection : <em>"
    + container.escapeExpression(((helper = (helper = helpers.dans_la_meme_collection || (depth0 != null ? depth0.dans_la_meme_collection : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"dans_la_meme_collection","hash":{},"data":data}) : helper)))
    + "</em></span></p>";
},"15":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p><span class=\"same_author\">du même auteur : <em>"
    + container.escapeExpression(((helper = (helper = helpers.du_meme_auteur || (depth0 != null ? depth0.du_meme_auteur : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"du_meme_auteur","hash":{},"data":data}) : helper)))
    + "</em></span></p>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});