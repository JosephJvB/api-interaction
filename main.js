var sourceContainer = docuement.getElementById("source");  //global vars for html divs
var transContainer = document.getElementById("translation");

var button = document.getElementById("butt");
button.addEventListener('click', function() {
  var getQuote = new XMLHttpRequest(); //sends request to the API resource, telling function to read API info in JSON. calls addHTML fucntion
  getQuote.open('GET', 'https://eda-te-reo.herokuapp.com/api/proverbs');
  getQuote.onload = function() {
    var newQuote = JSON.parse(getQuote.responseText);
    sourceContainer.innerHTML = newQuote.source;
    transContainer.innerHTML = newQuote.translation;
  };
  getQuote.send();
});
