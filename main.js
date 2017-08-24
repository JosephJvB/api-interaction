var quoteContainer = docuement.getElementById("source");  //Directing the new HTML elements into the correct divs
var authorContainer = document.getElementById("translation");

var button = document.getElementById("butt");
button.addEventListener('click', function() {
  var getQuote = new XMLHttpRequest(); //sends request to the API resource, telling function to read API info in JSON. calls addHTML fucntion
  getQuote.open('GET', 'https://eda-te-reo.herokuapp.com/api/proverbs');
  getQuote.onload = function() {
    var newQuote = JSON.parse(getQuote.responseText);
    addHTML(newQuote);
  };
  getQuote.send();
});


//function to add new html
function addHTML(source, translation) {  //weird arguments here
  var newSource = "";
  var newTrans = "";
  for (var i=0; i<newQuote.length;i++){
    newSource = "<p>" + newQuote[i].source + ".</p>"
    newTrans = "<p>" + newQuote[i].translation + ".</p>"
  }
  quoteContainer.innerHTML = newQuote.newSource //NEEDS ATTENTION
  authorContainer.innerHTML = newQuote.newTrans
}


.
brain fail brain fail evacuate abandon ship
