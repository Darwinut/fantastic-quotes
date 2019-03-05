var message = '';
var quote;

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

for (var i = 0; i < quotes.length; i += 1 ) {
quote = quotes[i];
message += '<h2>Quote: ' + quote.quotation + '</h2>';
}
print (message);