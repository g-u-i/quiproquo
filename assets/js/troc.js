
var sheet = 'https://docs.google.com/spreadsheets/d/1oijI8VcXt3nLGybXGN27IyamyfXoaA9ewYVaxPtAQiU/pubhtml?gid=31114155&single=true'

function init() {
  Tabletop.init( { key:sheet,
                   callback: onData,
                   simpleSheet: true } )
}

init();


function onData(data){

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
