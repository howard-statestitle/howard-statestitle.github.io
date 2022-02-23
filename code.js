const numberOfWords = 3;
let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
let words = _.map($('#words div'), function(div) { return $(div).text() });

let sampleDigit = _.sample(digits);
let sampleSymbol = _.sample(symbols);
let sampleWords = _.sampleSize(words, numberOfWords);
let entities = [sampleWords[0], sampleDigit, sampleWords[1], sampleSymbol, sampleWords[2]];
let passphrase = entities.join("");

$('#passphrase').text(passphrase);
