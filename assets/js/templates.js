this["troc"] = this["troc"] || {};
this["troc"]["backcover"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section class=\"page page-default page-backcover\">\n  <div class=\"content\">\n\n    <div class=\"gradient\"></div>\n\n    <div class=\"logo\">\n      <img src=\"http://la-bibliotheque.de/quiproquo/content/logo-quiproquo.svg\";>\n    </div>\n\n    <div class=\"info\">\n      <h3> Un troc<br>d’éditions </h3>\n      <h4>\n        31 mars 2017 <br>\n        1 avril 2017 <br>\n        Patio de la HEAR <br>\n        Strasbourg\n      </h4>\n    </div>\n\n  </div>\n</section>\n";
},"useData":true});
this["troc"]["cover"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section class=\"page page-default page-cover\">\n  <div class=\"content\">\n    \n    <div class=\"gradient\"></div>\n\n    <h1>Quiproquo</h1>\n\n    <div class=\"info\">\n      <h2>#2</h2>\n    </div>\n\n  </div>\n</section>\n";
},"useData":true});
this["troc"]["edito"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section class=\"page page-default page-edito page-edito--odd\">\n  <div class=\"content\">\n\n\n  </div>\n</section>\n\n<section class=\"page page-default page-edito page-edito--even\">\n  <div class=\"content\">\n\n    <h3>Édito</h3>\n\n    <p>\n      <strong>Rien à vendre, tout à dépenser.</strong>\n    </p>\n    <p>\n      <strong>C’est un complet Quiproquo. Tu viens avec un livre, tu repars avec un autre.</strong>\n    </p>\n    <p>\n      Le deuxième troc d’éditions est organisé le vendredi 31 mars et samedi 1er avril 2017. Son nom ? Quiproquo. C’est une promesse d’échange : un qui pour un quo. Il a lieu à la Hear, dans le cadre de Exemplaires 2017. L’occasion de réunir les pratiques éditoriales en écoles, mêlant étudiants à enseignants à intervenants: l’EESAB – Rennes, l’ENSBA – Lyon, l’ERG – Bruxelles, l’ESAD – Valence, la HEAD – Genève, la HEAR – Mulhouse/Strasbourg, l’ISBA – Besançon, l’isdaT – Toulouse, LISAA – Strasbourg, Université des arts visuels – Strasbourg, le Lycée Gutenberg – Illkirch, le Pôle Supérieur de Design Le Corbusier – Illkirch, l’Université Paris 8, l’UQAM – Montréal…\n    </p>\n\n  </div>\n</section>\n\n<section class=\"page page-default page-edito page-edito--odd\">\n  <div class=\"content\">\n\n\n  </div>\n</section>\n\n<section class=\"page page-default page-edito page-edito--even\">\n  <div class=\"content\">\n\n    <p>\n      <strong>Tu penses à des équivalences. Tu soupèses la chose. Tu l’évalues. Tu aimes ou tu tentes le coup. Ça se change comme ça, en négociation, en faisant un pari.</strong>\n    </p>\n    <p>\n      <strong><em>Chantre</em> contre <em>Phobo Phobie</em>, <em>open modele</em> contre <em>Lubriquité exotique</em>, <em>Orestie</em> contre <em>Monstre dépression</em>, <em>Après-demain</em> contre <em>Black out</em>, <em>Blitzzz</em> contre <em>Chien</em>, la quadri contre la bichromie, le carré-collé contre le juste plié, le 26 contre le 17, le 55 contre le 2.</strong>\n    </p>\n    <p>\n      Cette fois encore, la scénographie a été conçue pour l’occasion, des échelles en combinaisons, toutes en légèreté, lors d’un workshop avec les étudiants de l’InsituLab. En résulte un mobilier transportable, incliné et mobile comme les livres. Les marque pages font le lien. Tout s’accorde et se relie au catalogue. Grâce au code développé en amont, le catalogue est mouvant jusqu’à la dernière minute, jusqu’à l’arrivée du dernier participant…\n      <strong>Le Quiproquo c’est ceci & cela. C’est spontané, éphémère, cumulatif & équilibré. C’est & et & et &… Un troc de trucs imprimés.</strong>\n    </p>\n\n  </div>\n</section>\n";
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
this["troc"]["ticket"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<section class=\"page page-ticket\">\n  <div class=\"content\">\n\n    <!-- stock -->\n    <div class=\"ticket ticket--stock\">\n\n      <div class=\"id\">\n        <img src=\"../home/etapes-qpq03.svg\">\n        <span class=\"huge\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.numero_livre : stack1), depth0))
    + "</span>\n      </div>\n\n      <div class=photoitem>\n        <img class=\"photo\" data-src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.numero_livre : stack1), depth0))
    + ".jpg\" src=\"print/assets/img/placeholder.gif\" alt=\"\" />\n      </div>\n\n    </div>\n\n    <!-- expo -->\n    <div class=\"ticket ticket--expo\">\n\n      <div class=\"id\">\n        <span class=\"huge\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.numero_livre : stack1), depth0))
    + "</span>\n        <img src=\"../home/etapes-qpq04.svg\">\n      </div>\n\n      <div class=photoitem>\n        <img class=\"photo\" data-src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.numero_livre : stack1), depth0))
    + ".jpg\" src=\"print/assets/img/placeholder.gif\" alt=\"\" />\n      </div>\n\n      <div class=legende>\n        <p class=\"cote\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.numero_livre : stack1), depth0))
    + "."
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.largeur : stack1), depth0))
    + "."
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.hauteur : stack1), depth0))
    + "."
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.nombre_de_pages : stack1), depth0))
    + "."
    + ((stack1 = (helpers.colorCode || (depth0 && depth0.colorCode) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.mode_colorimetrique : stack1),{"name":"colorCode","hash":{},"data":data})) != null ? stack1 : "")
    + "."
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.nombre_d_exemplaires : stack1), depth0))
    + "</p>\n        <p class=\"nom\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.auteur : stack1), depth0))
    + "</p>\n        <p class=\"titre\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.titre : stack1), depth0))
    + "</p>\n        <p class=\"pagenb\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.nombre_de_pages : stack1), depth0))
    + "p</p>\n\n        <p class=\"city\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.ville_d_impression : stack1), depth0))
    + "</p>\n        <p class=\"date\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.annee : stack1), depth0))
    + "</p>\n        <p class=\"size\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.largeur : stack1), depth0))
    + "×"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.hauteur : stack1), depth0))
    + "mm</p>\n        <p class=\"technic\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.technique_d_impression : stack1), depth0))
    + ", "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.mode_colorimetrique : stack1), depth0))
    + "</p>\n        <p class=\"reliure\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.reliure : stack1), depth0))
    + "</p>\n      </div>\n\n    </div>\n\n    <!-- badge -->\n    <div class=\"ticket ticket--badge\">\n\n      <div class=\"id\">\n        <img src=\"../home/etapes-qpq01.svg\">\n        <span class=\"huge\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.numero_livre : stack1), depth0))
    + "</span>\n      </div>\n\n      <div class=photoitem>\n        <img class=\"photo\" data-src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.numero_livre : stack1), depth0))
    + ".jpg\" src=\"print/assets/img/placeholder.gif\" alt=\"\" />\n      </div>\n\n    </div>\n\n    <!-- monaie -->\n    <div class=\"ticket ticket--monaie\">\n\n      <div class=\"id\">\n        <img src=\"../home/etapes-qpq06.svg\">\n        <span class=\"huge\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.numero_livre : stack1), depth0))
    + "</span>\n      </div>\n\n      <div class=photoitem>\n        <img class=\"photo\" data-src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.numero_livre : stack1), depth0))
    + ".jpg\" src=\"print/assets/img/placeholder.gif\" alt=\"\" />\n      </div>\n\n    </div>\n    <div class=\"ticket ticket--monaie\">\n\n      <div class=\"id\">\n        <img src=\"../home/etapes-qpq06.svg\">\n        <span class=\"huge\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.numero_livre : stack1), depth0))
    + "</span>\n      </div>\n\n      <div class=photoitem>\n        <img class=\"photo\" data-src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.numero_livre : stack1), depth0))
    + ".jpg\" src=\"print/assets/img/placeholder.gif\" alt=\"\" />\n      </div>\n\n    </div>\n    <div class=\"ticket ticket--monaie\">\n\n      <div class=\"id\">\n        <img src=\"../home/etapes-qpq06.svg\">\n        <span class=\"huge\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.numero_livre : stack1), depth0))
    + "</span>\n      </div>\n\n      <div class=photoitem>\n        <img class=\"photo\" data-src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.numero_livre : stack1), depth0))
    + ".jpg\" src=\"print/assets/img/placeholder.gif\" alt=\"\" />\n      </div>\n\n    </div>\n    <div class=\"ticket ticket--monaie\">\n\n      <div class=\"id\">\n        <img src=\"../home/etapes-qpq06.svg\">\n        <span class=\"huge\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.numero_livre : stack1), depth0))
    + "</span>\n      </div>\n\n      <div class=photoitem>\n        <img class=\"photo\" data-src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.numero_livre : stack1), depth0))
    + ".jpg\" src=\"print/assets/img/placeholder.gif\" alt=\"\" />\n      </div>\n\n    </div>\n    <div class=\"ticket ticket--monaie\">\n\n      <div class=\"id\">\n        <img src=\"../home/etapes-qpq06.svg\">\n        <span class=\"huge\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.numero_livre : stack1), depth0))
    + "</span>\n      </div>\n\n      <div class=photoitem>\n        <img class=\"photo\" data-src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.numero_livre : stack1), depth0))
    + ".jpg\" src=\"print/assets/img/placeholder.gif\" alt=\"\" />\n      </div>\n\n    </div>\n\n  </div>\n</section>\n";
},"useData":true});