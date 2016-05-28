// Params
var registrations = 'https://docs.google.com/spreadsheets/d/1oijI8VcXt3nLGybXGN27IyamyfXoaA9ewYVaxPtAQiU/pubhtml'
var exchanges = 'https://docs.google.com/spreadsheets/d/17hYYlPaNvJFRN32fnnwBHdRGyZmKWlet3_qDrX0OvSo/pubhtml'

// Functions / Handlebars
function init() {
  Tabletop.init({ key: registrations,
                  callback: onRegistrationsLoad,
                  simpleSheet: false })
  Tabletop.init({ key: exchanges,
                  callback: onExchangesLoad,
                  simpleSheet: false })
}

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

// --------- On load ---------
function onRegistrationsLoad(payload){
  // console.log(payload); //Object { Contenus Froids: Object, Réponses au formulaire: Object }

  var informations = dataCleanup( payload['Contenus Froids'].elements );
  var data = dataCleanup( payload['Réponses au formulaire'].elements );

  // Prepare pages
  // 2×6 books per page
  var pages = _.chunk(data, 12);
  _.forEach(pages, function(value, key) {
    pages[key] = _.chunk(value, 6);
  });

  $('body').prepend(
    troc.list_index({pages:pages})
  );

}

function onExchangesLoad(payload){
  // console.log(payload); //Object { Échanges: Object }

  var data = dataCleanup( payload['Échanges'].elements );
  // var data = payload['Échanges'].elements;

  // Prepare pages
  // 2 books per page
  var pages = _.chunk(data, 2);

  $('body').append(
    troc.list_exchanges({pages:pages})
  );

}

// --------- I N I T ---------
init();
