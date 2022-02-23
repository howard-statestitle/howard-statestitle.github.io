const numberOfWords = 3;
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

function generate() {
  // select languages
  let checked = $('#settings input:checkbox:checked');
  let languages = _.map(checked, function(input) { return $(input).attr('id') });
  let selectors = _.map(languages, function(language) { return `#words .${language}` });
  let selector = selectors.join(',');
  let words = _.map($(selector), function(div) { return $(div).text() });

  // sample entities
  let sampleDigit = _.sample(digits);
  let sampleSymbol = _.sample(symbols);
  let sampleWords = _.sampleSize(words, numberOfWords);
  let entities = [sampleWords[0], sampleDigit, sampleWords[1], sampleSymbol, sampleWords[2]];

  // display passphrase
  let passphrase = entities.join('');
  $('#passphrase').text(passphrase);
}

$('#english').prop('checked', true);
generate();

$('body').on('click', function(event) {
  let node = $(event.target);
  let isBody = (node.prop('tagName') == 'BODY');
  if (isBody) {
    generate();
  }
})
