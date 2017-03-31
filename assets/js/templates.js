this["troc"] = this["troc"] || {};
this["troc"]["backcover"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section class=\"page page-default page-backcover\">\n  <div class=\"content\">\n\n    <div class=\"logo\">\n      <img src=\"http://la-bibliotheque.de/quiproquo/content/logo-quiproquo.svg\";>\n    </div>\n\n  </div>\n</section>\n";
},"useData":true});
this["troc"]["cover"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section class=\"page page-default page-cover\">\n  <div class=\"content\">\n\n    <h1>Quiproquo</h1>\n\n    <div class=\"info\">\n      <h2>#2</h2>\n      <h3> Un troc<br>d’éditions </h3>\n      <h4>\n        31 mars 2017 <br>\n        Patio de la HEAR <br>\n        Strasbourg\n      </h4>\n    </div>\n\n    <div class=\"img2\">\n      <img src=\"http://la-bibliotheque.de/quiproquo/content/home/etapes-qpq01.svg\";>\n    </div>\n\n    <div class=\"img3\">\n      <img src=\"http://la-bibliotheque.de/quiproquo/content/home/etapes-qpq02.svg\";>\n    </div>\n\n    <div class=\"img4\">\n      <img src=\"http://la-bibliotheque.de/quiproquo/content/home/etapes-qpq03.svg\";>\n    </div>\n\n    <div class=\"img5\">\n      <img src=\"http://la-bibliotheque.de/quiproquo/content/home/etapes-qpq04.svg\";>\n    </div>\n\n    <div class=\"img6\">\n      <img src=\"http://la-bibliotheque.de/quiproquo/content/home/etapes-qpq05.svg\";>\n    </div>\n\n    <div class=\"img7\">\n      <img src=\"http://la-bibliotheque.de/quiproquo/content/home/etapes-qpq06.svg\";>\n    </div>\n\n    <div class=\"img8\">\n      <img src=\"http://la-bibliotheque.de/quiproquo/content/home/etapes-qpq07.svg\";>\n    </div>\n\n    <div class=\"img10\">\n      <img src=\"http://la-bibliotheque.de/quiproquo/content/fleche-droite.svg\";>\n    </div>\n\n  </div>\n</section>\n";
},"useData":true});
this["troc"]["edito"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section class=\"page page-default page-edito page-edito--odd\">\n  <div class=\"content\">\n\n\n  </div>\n</section>\n\n<section class=\"page page-default page-edito page-edito--even\">\n  <div class=\"content\">\n\n    <h3>Édito</h3>\n\n    <p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows.</p>\n\n  </div>\n</section>\n";
},"useData":true});
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
    + "</span>\n          </p>\n\n        </figcaption>\n\n        <img data-src1=\""
    + alias4(((helper = (helper = helpers.numero_du_livre_1 || (depth0 != null ? depth0.numero_du_livre_1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numero_du_livre_1","hash":{},"data":data}) : helper)))
    + "\" data-src2=\""
    + alias4(((helper = (helper = helpers.numero_du_livre_2 || (depth0 != null ? depth0.numero_du_livre_2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numero_du_livre_2","hash":{},"data":data}) : helper)))
    + "\" src=\"print/assets/img/placeholder.gif\" alt=\"\" />\n\n      </figure>\n\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["troc"]["list_index"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section class=\"page page-default page-index page-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"content\">\n\n    <div class=index>\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n  </div>\n</section>\n\n<section class=\"page page-default page-index page-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"content\">\n\n    <div class=\"index\">\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n  </div>\n</section>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n      <div class=\"photoitem\">\n        <img class=\"photo\" data-src=\""
    + alias4(((helper = (helper = helpers.numero_livre || (depth0 != null ? depth0.numero_livre : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numero_livre","hash":{},"data":data}) : helper)))
    + ".jpg\" src=\"print/assets/img/placeholder.gif\" alt=\"\" />\n        <p class=\"cote\">"
    + alias4(((helper = (helper = helpers.numero_livre || (depth0 != null ? depth0.numero_livre : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numero_livre","hash":{},"data":data}) : helper)))
    + "."
    + alias4(((helper = (helper = helpers.largeur || (depth0 != null ? depth0.largeur : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"largeur","hash":{},"data":data}) : helper)))
    + "."
    + alias4(((helper = (helper = helpers.hauteur || (depth0 != null ? depth0.hauteur : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hauteur","hash":{},"data":data}) : helper)))
    + "."
    + alias4(((helper = (helper = helpers.nombre_de_pages || (depth0 != null ? depth0.nombre_de_pages : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombre_de_pages","hash":{},"data":data}) : helper)))
    + "."
    + ((stack1 = (helpers.colorCode || (depth0 && depth0.colorCode) || alias2).call(alias1,(depth0 != null ? depth0.mode_colorimetrique : depth0),{"name":"colorCode","hash":{},"data":data})) != null ? stack1 : "")
    + "."
    + alias4(((helper = (helper = helpers.nombre_d_exemplaires || (depth0 != null ? depth0.nombre_d_exemplaires : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombre_d_exemplaires","hash":{},"data":data}) : helper)))
    + "</p>\n      </div>\n\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n    <div class=\"legende\">\n      <p class=\"cote\">"
    + alias4(((helper = (helper = helpers.numero_livre || (depth0 != null ? depth0.numero_livre : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numero_livre","hash":{},"data":data}) : helper)))
    + "."
    + alias4(((helper = (helper = helpers.largeur || (depth0 != null ? depth0.largeur : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"largeur","hash":{},"data":data}) : helper)))
    + "."
    + alias4(((helper = (helper = helpers.hauteur || (depth0 != null ? depth0.hauteur : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hauteur","hash":{},"data":data}) : helper)))
    + "."
    + alias4(((helper = (helper = helpers.nombre_de_pages || (depth0 != null ? depth0.nombre_de_pages : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombre_de_pages","hash":{},"data":data}) : helper)))
    + "."
    + ((stack1 = (helpers.colorCode || (depth0 && depth0.colorCode) || alias2).call(alias1,(depth0 != null ? depth0.mode_colorimetrique : depth0),{"name":"colorCode","hash":{},"data":data})) != null ? stack1 : "")
    + "."
    + alias4(((helper = (helper = helpers.nombre_d_exemplaires || (depth0 != null ? depth0.nombre_d_exemplaires : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombre_d_exemplaires","hash":{},"data":data}) : helper)))
    + "</p>\n      <p class=\"nom\">"
    + alias4(((helper = (helper = helpers.auteur || (depth0 != null ? depth0.auteur : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"auteur","hash":{},"data":data}) : helper)))
    + "</p>\n      <p class=\"titre\">"
    + alias4(((helper = (helper = helpers.titre || (depth0 != null ? depth0.titre : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titre","hash":{},"data":data}) : helper)))
    + "</p>\n      <p class=\"pagenb\">"
    + alias4(((helper = (helper = helpers.nombre_de_pages || (depth0 != null ? depth0.nombre_de_pages : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombre_de_pages","hash":{},"data":data}) : helper)))
    + "p</p>\n\n      <p class=\"city\">"
    + alias4(((helper = (helper = helpers.ville_d_impression || (depth0 != null ? depth0.ville_d_impression : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ville_d_impression","hash":{},"data":data}) : helper)))
    + "</p>\n      <p class=\"date\">"
    + alias4(((helper = (helper = helpers.annee || (depth0 != null ? depth0.annee : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"annee","hash":{},"data":data}) : helper)))
    + "</p>\n      <p class=\"size\">"
    + alias4(((helper = (helper = helpers.largeur || (depth0 != null ? depth0.largeur : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"largeur","hash":{},"data":data}) : helper)))
    + "×"
    + alias4(((helper = (helper = helpers.hauteur || (depth0 != null ? depth0.hauteur : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hauteur","hash":{},"data":data}) : helper)))
    + "mm</p>\n      <p class=\"technic\">"
    + alias4(((helper = (helper = helpers.technique_d_impression || (depth0 != null ? depth0.technique_d_impression : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"technique_d_impression","hash":{},"data":data}) : helper)))
    + ", "
    + alias4(((helper = (helper = helpers.mode_colorimetrique || (depth0 != null ? depth0.mode_colorimetrique : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mode_colorimetrique","hash":{},"data":data}) : helper)))
    + "</p>\n      <p class=\"reliure\">"
    + alias4(((helper = (helper = helpers.reliure || (depth0 != null ? depth0.reliure : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reliure","hash":{},"data":data}) : helper)))
    + "</p>\n    </div>\n\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["troc"]["ours"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section class=\"page page-default page-ours page-ours--odd\">\n  <div class=\"content\">\n\n\n  </div>\n</section>\n\n<section class=\"page page-default page-ours page-ours--even\">\n  <div class=\"content\">\n\n    <h3>Ours</h3>\n\n    <p>\n      Avec la participation de l’EESAB - Rennes, l’ENSBA - Lyon, l’ERG - Bruxelles, l’ESAD - Valence, la HEAD - Genève, la HEAR - Strasbourg/Mulhouse, l’ISBA - Besançon, l’isdaT - Toulouse, LISAA - Strasbourg, le Lycée Gutenberg - Illkirch, le Pôle Supérieur de Design Le Corbusier - Illkirch, l’Université des arts visuels – Strasbourg, l’UQAM - Montréal.\n    </p>\n\n    <p>\n      Scénographie et catalogue réalisés lors d’un workshop d’Angeline Ostinelli et Julien Gargot avec les étudiants du DSAA inSituLab, Florent Alexandre, Koulma Bilger, Pétronille Camphuis, Sophie Chialva, Solène Dietz, Juliette Ganteille, Célia Galipaud, Thomas Huard, Suzanne Husson, Elín-Margot Höskuldsson, Pauline Molina, Morgane Marin, Mathilde Richard, Maeva Tobalagba et Mélodie Valverde.\n    </p>\n\n    <p>\n      Avec le soutien de Fedrigoni, la HEAR et le Pôle Supérieur de Design Le Corbusier\n    </p>\n\n    <p class=\"small\">\n      Côte : N° du live. Largeur. Hauteur. Nbre de pages. Couleur. Nbre d'exemplaires<br>\n      Couleur: C = Couleur / NB = Noir et blanc / + = Autres.\n    </p>\n\n  </div>\n</section>\n";
},"useData":true});