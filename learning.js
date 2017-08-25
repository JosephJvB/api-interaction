function quoteGen() {

var quoteList =  [
            {quote: "somebody once told me", author: "Shrek"},
            {quote: "all that glitters is gold", author: "SmashMouth"},
            {quote: "this isnt a placeholder this is just a tribute", author: "Jack Black"}
          ]


Math.floor((Math.random()*quoteList.length)) //to select random item from the array

}

var quoteContainer = docuement.getElementById("quote");
var authorContainer = document.getElementById("author");

var button = document.getElementById("butt");
button.addEventListener('click', getQuote);



var getQuote = new XMLHttpRequest();
getQuote.open('GET', 'https://eda-te-reo.herokuapp.com/api/proverbs');
getQuote.onload = quoteGen() {
  var newQuote = JSON.parse(getQuote.responseText);
  addHTML(newQuote);
}
getQuote.send();


function addHTML(quote, author) {
  var newString = "";
  var newAuthor = "";
  for (var i=0; i<quoteList.length;i++){
    newString = "<p>" + quoteList[i].source + ".</p>"
    newAuthor = "<p>" + quoteList[i].translation + ".</p>"
  }
  quoteContainer.innerHTML(newString)
  authorContainer.innerHTML(newAuthor)
}

/function to add new html
// function addHTML(data) {  //weird arguments here
//   var newSource = "";
//   var newTrans = "";
//   for (var i=0; i<data.length;i++){
//     newSource = "<p>" + data[i].source + ".</p>"
//     newTrans = "<p>" + data[i].translation + ".</p>"
//   }
//   quoteContainer.innerHTML = newSource; //NEEDS ATTENTION
//   authorContainer.innerHTML = newTrans;
// }



/*brain fail brain fail evacuate abandon ship
JS using two main functions for the quote stuff - twitter afterwards

one function to send request to API*/



gonna have to start again. :(
