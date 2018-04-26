/**********************************************

DART 450, Winter 2018
BrutalBook
Sévan Belleau

Description of what the script does...

**********************************************/


(function() {
  // the var input gets the elements with the id of postInput which is the input zone itself. This is the raw text string
var input = document.getElementById("postInput");
// The var submitButton gets the elements of the submit action itself, which allows for the EventListener used a bit further.
var submitButton = document.getElementById("submitButton");
// The var message is creating a value for the make div, it will allow it becomes the taget or the input when sumbit is clicked. What that means outside of internet speak is that the string, is then transfered to the message value.
var message = document.getElementById("make");
// Here we are creating a value for the entire form element. This will allow it to be listened to, which will then trigger the function handleform, which will stop the entire page from refreshing everytime a post is made.
var form = document.getElementById("postForm");


// This is where the magic of a new post is. This could be a div element instead of an h1 but given the internet, this is what it is. (Honestly a div would probably have made life eaiser but I'm in too deep to go back now :) )
var makePost = function(str) {
  var postContainer = document.createElement("h1");
  // This will take the newly created element and change its content to str which is short for string, aka what was typed into the form.

  postContainer.textContent = str;
  // The return apparently is there so things don't self destruct.
  return postContainer;
}

// location is the var message, which is the Div that will contain the new Post.
var makeNewPost = function(location, txt) {
  location.appendChild(makePost(txt))
}

var onInput = function() {
  // This states that the input will take the value (text) from the input and put it in the var str (string)
  var str = input.value;
// This runs the makeNewPost which appends the new h1 in makePost and adds the string into the open input.value.
  makeNewPost(message, str)
  input.value = "";
}

// The default behavior of submit within a form is to refresh the entire page. I don't want that so I use prevent default to stop it from refreshing all the things.
function handleForm(event) {
  event.preventDefault();
}

// asking the submitButton to listen for a click event, and when it finds one it calls on input. The click also triggers the submit behavior in the form.
submitButton.addEventListener("click", onInput);

// This is sentence is adding a listener for any submit cues (which would come for the form) to trigger the handleForm function.
form.addEventListener("submit", handleForm);


})();
