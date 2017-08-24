var sourceContainer = docuement.getElementById("source");  //global vars for html divs
var transContainer = document.getElementById("translation");

var button = document.getElementById("butt");
button.addEventListener('click', function() { //responds to click event
  var getQuote = new XMLHttpRequest(); //request to the API resource, telling function to read API info in JSON.
  getQuote.open('GET', 'https://eda-te-reo.herokuapp.com/api/proverbs');
  getQuote.onload = function() {
    var newQuote = JSON.parse(getQuote.responseText);  //attempt to alter html elements with recieved information.
    sourceContainer.innerHTML = newQuote.source;
    transContainer.innerHTML = newQuote.translation;
  };
  getQuote.send();  // sends request
});
