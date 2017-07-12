this["troc"] = this["troc"] || {};
this["troc"]["all_static_tickets"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "    <!-- badge -->\n    <div class=\"ticket ticket--badge\">\n\n      <figure>\n        <img src=\"print/assets/img/logo-quiproquo.svg\">\n        <figcaption>\n          #3 Paris\n        </figcaption>\n      </figure>\n\n      <p class=\"text\">\n        Rendez-vous <br>\n        le dimanche 30.04.17 <br>\n        de 16 à 18 heures <br>\n      </p>\n\n      <p class=\"number\">"
    + alias2(alias1(depth0, depth0))
    + "</p>\n\n      <p class=\"address\">\n        www.la-bibliotheque.de/quiproquo\n      </p>\n\n    </div>\n\n    <!-- stock -->\n    <div class=\"ticket ticket--stock\">\n\n      <p class=\"number\">"
    + alias2(alias1(depth0, depth0))
    + "</p>\n\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section class=\"page page-ticket\">\n  <div class=\"content\">\n\n"
    + ((stack1 = (helpers.loop || (depth0 && depth0.loop) || helpers.helperMissing).call(depth0 != null ? depth0 : {},1,{"name":"loop","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</section>\n";
},"useData":true});
this["troc"]["backcover"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section class=\"page page-default page-backcover\">\n  <div class=\"content\">\n\n  </div>\n</section>\n";
},"useData":true});
this["troc"]["cover"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section class=\"page page-default page-cover\">\n  <div class=\"content\">\n\n    <h1>Quiproquo</h1>\n\n    <div class=\"info\">\n      <h2>#3</h2>\n    </div>\n\n  </div>\n</section>\n";
},"useData":true});
this["troc"]["edito"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section class=\"page page-default page-edito page-edito--odd\">\n  <div class=\"content\">\n\n\n  </div>\n</section>\n\n<section class=\"page page-default page-edito page-edito--even\">\n  <div class=\"content\">\n\n    <h3>Édito</h3>\n\n    <p>\n    Jour 1, l’espace est blanc, bien blanc, nous sommes dans un atelier\n    d’artiste. En arrière-plan, une bibliothèque, quelques plantes et une\n    verrière. Sur quatre câbles tendus, se reposent et se côtoient les éditions\n    de Quiproquo. Elles dessinent deux rangs de livres. Un alignement doux en\n    progression. Certains artistes ont posé leurs livres à deux endroits, sur la\n    table des ventes, sur le fil du troc. Des visiteurs apportent des\n    publications confidentielles. Les fils se courbent, les livres circulent.<br>\n    Ici on capture la couverture de chaque ouvrage. Là, on imprime les cartels\n    à l’aide d’une petite imprimante. Le livre est déposé, de 1 à 3 exemplaires.\n    Vous repartez avec un ticket rose, un numéro par livre.<br>\n    Jour 2, au sol, contre les murs, sur les coussins, ou bien au fond de\n    l’espace dans le coin salon, on feuillette, on discute, livre à la main,\n    pendant que les performances se succèdent.<br>\n    Jour 3, le moment venu, vous affichez vos galons et partez en troc.<br>\n    Cela dure un peu plus d’une heure, vous pouvez faire une proposition\n    d’échange, ou bien attendre une demande, c’est le jeu de la rencontre. Les\n    invitations donnent lieu →\n    </p>\n\n  </div>\n</section>\n\n<section class=\"page page-default page-edito page-edito--odd\">\n  <div class=\"content\">\n\n\n  </div>\n</section>\n\n<section class=\"page page-default page-edito page-edito--even\">\n  <div class=\"content\">\n\n    <p>\n    → à des discussions, et si les choses concordent, à\n    un accord. À chaque coup de cœur vous recommencez. Si vous tendez l’oreille\n    vous pouvez apercevoir les raisons, les papiers, les contextes, les\n    responsabilités, les assemblages qui se racontent et qui se tissent ; tous\n    ces points communs, ces hasards qui font se rapprocher et se croiser les\n    livres.\n    </p>\n\n    <p>\n      --<br>\n      Ancolas Couturelli<br>\n      --\n    </p>\n\n    <figure>\n      <img src=\"print/assets/img/logo-quiproquo.svg\" alt=\"\">\n    </figure>\n\n  </div>\n</section>\n";
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
    + ".jpg\" src=\"print/assets/img/placeholder.gif\" alt=\"\" />\n        <p class=\"cote\">3."
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

  return "\n    <div class=\"legende\">\n      <p class=\"cote\">3."
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
    return "<section class=\"page page-default page-ours page-ours--odd\">\n  <div class=\"content\">\n\n    <h3>Ours</h3>\n\n    <p>\n      Quiproquo est une proposition d’Angeline Ostinelli,\n      portée par l’association &&,\n      avec Nicolas Couturier et Julien Gargot.\n    </p>\n\n    <p>\n      Sur une invitation de Jérôme Dupeyrat,\n      Camila Oliveira Fairclough\n      et Raffaella della Olga.\n    </p>\n\n    <p class=\"small\">\n      Le texte est composé avec le Clear Sans de Neil Summerour, <br>\n      téléchargeable à l’adresse: https://clear.positype.com <br>\n      La mise en page de ce document a été fabriqué automatiquement <br>\n      par <em>Pantoufle</em>, un programme de Julien Gargot, à partir d’un <br>\n      formulaire en ligne. https://github.com/g-u-i/quiproquo\n    </p>\n\n    <p class=\"small\">\n      La côte des livre est construite ainsi : <br>\n      N<sup>o</sup> du troc. N<sup>o</sup> du livre. Largeur. Hauteur. Nbre de pages. Couleur. Nbr d’ex. <br>\n      Code Couleur: C = Couleur / NB = Noir et blanc / + = Autre.\n    </p>\n\n  </div>\n</section>\n\n<section class=\"page page-default page-ours page-ours--even\">\n  <div class=\"content\">\n\n  </div>\n</section>\n";
},"useData":true});
this["troc"]["test"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section class=\"page page-ticket\">\n  <div class=\"content\">\n\n    <div class=\"ticket ticket--message\">\n      \n    </div>\n\n</section>\n";
},"useData":true});
this["troc"]["ticket"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<section class=\"page page-ticket\">\n  <div class=\"content\">\n\n    <div class=\"reverse\">\n\n      <!-- expo -->\n      <div class=\"ticket ticket--expo\">\n\n        <figure class=\"thumb\">\n          <img class=\"cover\" data-src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.numero_livre : stack1), depth0))
    + ".jpg\" src=\"print/assets/img/placeholder.gif\" alt=\"\" />\n        </figure>\n\n        <p class=\"authors\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.auteur : stack1), depth0))
    + "</p>\n        <p class=\"title\"><em>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.titre : stack1), depth0))
    + "</em></p>\n\n        <p class=\"city\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.ville_d_impression : stack1), depth0))
    + ", "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.annee : stack1), depth0))
    + "</p>\n        <p class=\"pagenb\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.nombre_de_pages : stack1), depth0))
    + " pages</p>\n        <p class=\"size\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.largeur : stack1), depth0))
    + " × "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.hauteur : stack1), depth0))
    + " mm</p>\n        <p class=\"nb\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.nombre_d_exemplaires : stack1), depth0))
    + " exemplaires</p>\n        <p class=\"technic\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.technique_d_impression : stack1), depth0))
    + "</p>\n        <p class=\"colormode\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.mode_colorimetrique : stack1), depth0))
    + "</p>\n        <p class=\"reliure\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.reliure : stack1), depth0))
    + "</p>\n\n        <p class=\"id\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.numero_livre : stack1), depth0))
    + "</p>\n\n      </div>\n      .\n      <!-- badge -->\n      <div class=\"ticket ticket--badge\">\n\n        <figure>\n          <img src=\"print/assets/img/logo-quiproquo.svg\">\n          <figcaption>\n            #3 Paris\n          </figcaption>\n        </figure>\n\n        <p class=\"text\">\n          Rendez-vous <br>\n          le dimanche 30.04.17 <br>\n          de 16 à 18 heures <br>\n        </p>\n\n        <p class=\"address\">\n          www.la-bibliotheque.de/quiproquo\n        </p>\n\n      </div>\n\n    </div>\n\n  </div>\n</section>\n";
},"useData":true});
this["troc"]["ticket_troc"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "    <!-- badge -->\n    <div class=\"ticket ticket--badge ticket--troc\">\n\n      <figure>\n        <img src=\"print/assets/img/logo-quiproquo.svg\">\n        <figcaption>\n          #3 Paris\n        </figcaption>\n      </figure>\n\n      <p class=\"text\">\n        Dimanche 30.04.17 <br>\n      </p>\n\n    </div>\n    <!-- expo -->\n    <div class=\"ticket ticket--expo ticket--troc\">\n\n      <p class=\"authors\">"
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].page : depths[1])) != null ? stack1.auteur : stack1), depth0))
    + "</p>\n      <p class=\"title\"><em>"
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].page : depths[1])) != null ? stack1.titre : stack1), depth0))
    + "</em></p>\n\n      <p class=\"city\">"
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].page : depths[1])) != null ? stack1.ville_d_impression : stack1), depth0))
    + ", "
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].page : depths[1])) != null ? stack1.annee : stack1), depth0))
    + "</p>\n      <p class=\"pagenb\">"
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].page : depths[1])) != null ? stack1.nombre_de_pages : stack1), depth0))
    + " pages</p>\n      <p class=\"size\">"
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].page : depths[1])) != null ? stack1.largeur : stack1), depth0))
    + " × "
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].page : depths[1])) != null ? stack1.hauteur : stack1), depth0))
    + " mm</p>\n      <p class=\"nb\">"
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].page : depths[1])) != null ? stack1.nombre_d_exemplaires : stack1), depth0))
    + " exemplaires</p>\n      <p class=\"technic\">"
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].page : depths[1])) != null ? stack1.technique_d_impression : stack1), depth0))
    + "</p>\n      <p class=\"colormode\">"
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].page : depths[1])) != null ? stack1.mode_colorimetrique : stack1), depth0))
    + "</p>\n      <p class=\"reliure\">"
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].page : depths[1])) != null ? stack1.reliure : stack1), depth0))
    + "</p>\n\n      <p class=\"id\">"
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].page : depths[1])) != null ? stack1.numero_livre : stack1), depth0))
    + "</p>\n\n      <p class=\"address\">\n        www.la-bibliotheque.de/quiproquo\n      </p>\n\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<section class=\"page page-ticket\">\n  <div class=\"content\">\n\n"
    + ((stack1 = (helpers.loop || (depth0 && depth0.loop) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.number : depth0),{"name":"loop","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  </div>\n</section>\n";
},"useData":true,"useDepths":true});