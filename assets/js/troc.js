// Params
var sheet = 'https://docs.google.com/spreadsheets/d/1oijI8VcXt3nLGybXGN27IyamyfXoaA9ewYVaxPtAQiU/pubhtml'

// Functions / Handlebars
function init() {
  Tabletop.init({ key:sheet,
                  callback: onData,
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
      d[
        k.toLowerCase()
          .replace('é', 'e')
          .replace('è', 'e')
          .replace('ê', 'e')
          .replace('(s)', '')
          .replace(/[^a-z0-9]/gi, '_')
      ] = d[k];
      delete d[k];
    }
    return d;
  })
}

// --------- On load ---------
function onData(payload){
  // console.log(payload); //Object { Contenus Froids: Object, Échanges: Object, Réponses au formulaire: Object }

  var informations = dataCleanup( payload['Contenus Froids'].elements );
  var lines = dataCleanup( payload['Réponses au formulaire'].elements );
  var exchange = dataCleanup( payload['Échanges'].elements );

  // Prepare pages
  var pages = _.chunk(lines, 12);
  _.forEach(pages, function(value, key) {
    pages[key] = _.chunk(value, 6);
  });

  $('body').append(
    troc.list({pages:pages})
  );

}

// --------- I N I T ---------
init();
