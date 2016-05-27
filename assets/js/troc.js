
var sheet = 'https://docs.google.com/spreadsheets/d/1oijI8VcXt3nLGybXGN27IyamyfXoaA9ewYVaxPtAQiU/pubhtml?gid=31114155&single=true'

function init() {
  Tabletop.init( { key:sheet,
                   callback: onData,
                   simpleSheet: true } )
}

init();


function onData(payload){

  var data = dataCleanup(payload);
  $('#mount').html(troc.list( {lines:data} ) );

}

Handlebars.registerHelper('debug', function(optionalValue) {
  console.log('Current Context');
  console.log('====================');
  console.log(this);

  if (optionalValue) {
    console.log('Value');
    console.log('====================');
    console.log(optionalValue);
  }
});

function dataCleanup(payload){
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