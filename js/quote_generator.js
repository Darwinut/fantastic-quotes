var message = '';
var quote;

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

function randomQuote() {
  var i = Math.floor(Math.random() * quotes.length);
  quote = quotes[i];
  message += '<h2>Quote: ' + quote.quotation + '</h2>';
  return message;
}

print (randomQuote());