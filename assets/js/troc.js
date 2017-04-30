// Params
var registrations = 'https://docs.google.com/spreadsheets/d/1-9n_Zlapcpjd54ykTbHXbXPGaY-YjhDPAyvig_S2F7Q/pubhtml'
var exchanges = ''

var images_path = 'print/photos/';
var images_registration_folder = 'index/';
var images_exchange_folder = 'exchanges/';

// Functions / JS
Array.prototype.removeIf = function(callback) {
  var i = this.length;
  while (i--) {
    if (callback(this[i], i)) {
      this.splice(i, 1);
    }
  }
};

// Functions / Handlebars
function init_catalogue() {

  // Add statics pages
  addCover();
  addEdito();
  addOurs();
  addBackcover();

  // Add dynamics pages
  Tabletop.init({ key: registrations,
                  callback: onRegistrationsLoad,
                  simpleSheet: false })
  Tabletop.init({ key: exchanges,
                  callback: onExchangesLoad,
                  simpleSheet: false })

}

function init_ticket() {

  var hash = window.location.hash.replace(/^#/, '');

  if(/^display-\d+/.test(hash)) {

    // Add dynamics pages
    Tabletop.init({ key: registrations,
      callback: onRegistrationsLoadForTicket,
      simpleSheet: false })

  } else if(/^troc-\d+-\d+/.test(hash)) {

    // Add dynamics pages
    Tabletop.init({ key: registrations,
      callback: onRegistrationsLoadForTicketTroc,
      simpleSheet: false })

  } else if(/^stock/.test(hash)) {

    createStaticTickets();

  } else {

    createTest();

  }

}

$.fn.updateImages = function(folder_path)
{
  return this.each(function() {

    var $img = $(this);

    if ( $img.data('src').length === 0 )
      return;

    var path = folder_path + $img.data('src');
    $.get(path).done(function(){
      $img.attr('src', path);
    }).fail(function(){
      console.log(path, ' n’existe pas');
    });

  });
};

$.fn.updateImagesUnknowed = function(folder_path)
{
  return this.each(function() {

    var $img = $(this);

    if ( $img.data('src1').length === 0 || $img.data('src2').length === 0 )
      return;

    var path1= folder_path + $img.data('src1') + '-' + $img.data('src2') + '.jpg';
    $.get(path1).done(function(){
      $img.attr('src', path1);
    }).fail(function(){
      console.log(path1, ' n’existe pas');
    });
    var path2 = folder_path + $img.data('src2') + '-' + $img.data('src1') + '.jpg';
    $.get(path2).done(function(){
      $img.attr('src', path2);
    }).fail(function(){
      console.log(path2, ' n’existe pas');
    });

  });
};

Handlebars.registerHelper('debug', function(optionalValue)
{
  console.log('this', this);
  if (optionalValue) {
    console.log('Value', optionalValue);
  }
  console.log('---');
});

Handlebars.registerHelper('newPage', function(index_count, modulo, block)
{
  var i = parseInt(index_count);
  if( i > 0 && i % modulo === 0) {
    return block.fn(this); }
});

Handlebars.registerHelper('ifOr', function(a, b, block)
{
  if( a || b ) {
    return block.fn(this); }
});

Handlebars.registerHelper('ifAnd', function(a, b, block)
{
  if( a && b ) {
    return block.fn(this); }
});

Handlebars.registerHelper('ifCond', function (v1, operator, v2, options)
{

  switch (operator) {
    case '==':
      return (v1 == v2) ? options.fn(this) : options.inverse(this);
    case '===':
      return (v1 === v2) ? options.fn(this) : options.inverse(this);
    case '!=':
      return (v1 != v2) ? options.fn(this) : options.inverse(this);
    case '!==':
      return (v1 !== v2) ? options.fn(this) : options.inverse(this);
    case '<':
      return (v1 < v2) ? options.fn(this) : options.inverse(this);
    case '<=':
      return (v1 <= v2) ? options.fn(this) : options.inverse(this);
    case '>':
      return (v1 > v2) ? options.fn(this) : options.inverse(this);
    case '>=':
      return (v1 >= v2) ? options.fn(this) : options.inverse(this);
    case '&&':
      return (v1 && v2) ? options.fn(this) : options.inverse(this);
    case '||':
      return (v1 || v2) ? options.fn(this) : options.inverse(this);
    default:
      return options.inverse(this);
  }

});

Handlebars.registerHelper('firstChar', function(a)
{
  var s = a.charAt(0);
  return new Handlebars.SafeString(s)
});

Handlebars.registerHelper('colorCode', function(a)
{
  var s = "";

  if ( a.search('4 couleurs') === 0 ) {
    s += 'C';
  }
  if ( a.search('niveaux de gris') === 0 ) {
    s += 'NB';
  }
  if ( a.search('Autre') === 0 ) {
    s += '+';
  }
  return new Handlebars.SafeString(s)
});

Handlebars.registerHelper('loop', function(n, block)
{
    var accum = '';
    for(var i = 0; i < n; ++i)
      accum += block.fn(i);
    return accum;
});

function dataCleanup(payload)
{
  return _.map(payload,function(d){
    for (var k in d) {
      if( k == "image" ) continue; // Don’t know why, but this key disapear with the regex.
      var nk = k.toLowerCase()
      .replace('é', 'e')
      .replace('è', 'e')
      .replace('ê', 'e')
      .replace('(s)', '')
      .replace(/\s*\?\s*/g, '')
      .replace(/[^a-z0-9]/gi, '_')
      d[nk] = d[k];
      delete d[k];
    }
    return d;
  })
}

function isNumeroLivreEmpty(element, index) {
  return element.numero_livre === "" ? true : false;
}


// --------- On init ---------
function addCover(){
  console.log('addCover');
  $('body').append(
    troc.cover({foo:"bar"})
  );
}

function addEdito(){
  console.log('addEdito?');
  $('body').append(
    troc.edito()
  );

}

function addOurs(){
  console.log('addOurs?');
  $('body').append(
    troc.ours()
  );
}

function addBackcover(){
  console.log('addBackcover?');
  $('body').append(
    troc.backcover()
  );
}

function createStaticTickets(){
  console.log('createStaticTickets?');
  $('body').addClass('ticket').html(
    troc.all_static_tickets()
  );
}

function createTest(){
  console.log('createTest?');
  $('body').addClass('ticket').html(
    troc.test()
  );
}



// --------- On load ---------
function onRegistrationsLoad(payload){
  console.log('REGISTRATIONS', payload); //Object { Contenus Froids: Object, Réponses au formulaire: Object }

  // var informations = dataCleanup( payload['Contenus Froids'].elements );
  var data = dataCleanup( payload['Réponses au formulaire 1'].elements );

  // Remove non-registred books.
  data.removeIf(isNumeroLivreEmpty);

  // Prepare pages
  // 12 books per page
  var pages = _.chunk(data, 12);

  $('.page-edito--even').last().after(
    troc.list_index({pages:pages})
  );

  $('.page-index img').updateImages(images_path + images_registration_folder);

}

function onRegistrationsLoadForTicket(payload){
  console.log('REGISTRATIONS FOR TICKET', payload); //Object { Contenus Froids: Object, Réponses au formulaire: Object }

  $('body').addClass('ticket');

  var data = dataCleanup( payload['Réponses au formulaire 1'].elements );
  var ints = window.location.hash.match(/\d+/g);
  var wantedBook = parseInt( ints[0] );
  var page = null;

  $(data).each(function(i) {
    if ( this.numero_livre == wantedBook) {
      page = this;
      return false;
    }
  });

  $('body').html(
    troc.ticket({page:page})
  );

  $('.page-ticket img.cover').updateImages(images_path + images_registration_folder);

}

function onRegistrationsLoadForTicketTroc(payload){
  console.log('REGISTRATIONS FOR TICKET TROC', payload); //Object { Contenus Froids: Object, Réponses au formulaire: Object }

  $('body').addClass('ticket');

  var data = dataCleanup( payload['Réponses au formulaire 1'].elements );
  var ints = window.location.hash.match(/\d+/g);
  var wantedBook = parseInt( ints[0] );
  var number = parseInt( ints[1] );

  var page = null;

  $(data).each(function(i) {
    if ( this.numero_livre == wantedBook) {
      page = this;
      return false;
    }
  });

  $('body').html(
    troc.ticket_troc({page:page,number:number})
  );

  $('.page-ticket img.cover').updateImages(images_path + images_registration_folder);

}

function onExchangesLoad(payload){
  // console.log(payload); //Object { Échanges: Object }

  var data = dataCleanup( payload['Échanges'].elements );

  // Prepare pages
  // 2 books per page
  var pages = _.chunk(data, 2);

  $('.page-ours--odd').before(
    troc.list_exchanges({pages:pages})
  );

  $('.page-exchange img').updateImagesUnknowed(images_path + images_exchange_folder);

}



// --------- I N I T ---------
$(function() {

  if(window.location.hash) {

    init_ticket();

    $(window).on('hashchange', function() {
      init_ticket();
    });

  } else {

    init_catalogue();

  }

});
