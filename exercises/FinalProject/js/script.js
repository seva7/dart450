/**********************************************

DART 450, Winter 2018
BrutalBook
Sévan Belleau

Description of what the script does...

**********************************************/


(function() {
var input = document.getElementById("postInput");
var submitButton = document.getElementById("submitButton");
var message = document.getElementById("make");
var form = document.getElementById("postForm");
var makePost = function(str) {
  var postContainer = document.createElement("h1");
  // postContainer.id = "newerPost";
  postContainer.textContent = str;
  return postContainer;
}
// location is the var message. Which is the Div that will contain the new Post
var makeNewPost = function(location, txt) {
  location.appendChild(makePost(txt))
}
var onInput = function() {
  // This takes the text from the input and puts it in the var str (string)
  var str = input.value;

  makeNewPost(message, str)
  input.value = "";
}
// asking the submitButton to listen for a click event, and when it finds one it calls on input. The click also triggers the submit behavior in the form.


// The default behavior of submit within a form is to refresh the entire page. I don't want that so I use prevent default to stop it from refreshing all the things.
function handleForm(event) {
  event.preventDefault();
}

submitButton.addEventListener("click", onInput);
// submitButton.addEvenListener("13", onInput);

form.addEventListener("submit", handleForm);


})();
