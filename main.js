var sourceContainer = document.getElementById("source");  //global vars for html divs
var transContainer = document.getElementById("translation");

var button = document.getElementById("butt");

button.addEventListener('click', function doTheDo() { //responds to click event
  var getQuote = new XMLHttpRequest(); //request to the API resource, telling function to read API info in JSON.
  getQuote.open('GET', 'https://eda-te-reo.herokuapp.com/api/proverbs');
  sourceContainer.innerHTML = "One moment please :)"
  getQuote.onload = function() {
    var newQuote = JSON.parse(getQuote.responseText);  //attempt to alter html elements with recieved information.
      sourceContainer.innerHTML = newQuote.source;
      transContainer.innerHTML = newQuote.translation;

  };
  getQuote.send();  // sends request
});

var twitbutt = document.getElementById('twitbutt');
twitbutt.addEventListener('click', function tweeter () {
  var url = "https://twitter.com/intent/tweet";
  var text = sourceContainer.innerHTML;   //funtion doesnt want to recognise the innerHTML, doesnt tweet the text from the API :(
  var hashtags = "MaoriWisdom"
  var via = "JoeVanBo";
  window.open(url + "?text" + text + ";hashtags=" + hashtags + ";via=" + via, "", "width=500", "height=300" )
})
