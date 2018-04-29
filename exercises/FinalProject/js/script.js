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

// All this code is before the document.ready because it is an anonymous function that calls upon itself as the page is loaded.
})();

$(document).ready(function () {

var otherPosts = ["pics/audreypost.png","pics/vice.png","pics/charles.png","pics/mass.png"];
var numPosts = 4;
var posts =Math.floor((Math.random()*10)) % otherPosts.length
  var testDiv = $('<img class="drawnPosts" id="drawnPosts">');
  $('.make').append(testDiv);
  $('#drawnPosts').attr("src", otherPosts[posts]);




var time = Math.random() * 30000;
console.log(time)

// I wanted to make a nicer way but I didnt manage to.

// Here is the first test of my second big part of code. I wanted a random post to appear every now and then to give some life to the BrutalBook website.
// The idea is that every x amount of time, jquery would append a new img in my div with the posts and would do so by creating an open div that would
// then have an attr associated to it that defined its source. This would mean I don't need same code multiple time but for some reason I can't make it work.
// var interval = an amount of time but I want that to change every x amount of time
// var otherPosts = ["pics/audreypost.png","pics/blank.png","pics/charles.png","pics/mass.png"];
// var numPosts = 4;
// var i =Math.floor((Math.random()*10)) % otherPosts.length
// var testDiv = $('<img class="drawnPosts" id="drawnPosts">');
// $('.make').append(testDiv);
// $('#drawnPosts').attr("src", otherPosts[i]);

// Here I am trying to see if i++ can make the posts post more than once, seeing that is the most I can do for now.
// var otherPosts = ["pics/audreypost.png","pics/blank.png","pics/charles.png","pics/mass.png"];
// var posts =Math.floor((Math.random()*10)) % otherPosts.length;
// var $newPostPics = $('<img class="drawnPosts" id="drawnPosts">');
// var i = 0
// var appendDiv = setInterval(function(){
//   if (i===4) {
//     clearInterval(appendDiv);
//   }
//   else {
//     console.log(i);
//   $(".make").append($newPostPics)
//   $("#drawnPosts").attr("src", otherPosts[posts]);
// }
// i++
// },5000)

// Here I was trying to count the time the posts were appended. The var interval would have been changed with my random time one.
// var $newPostPics = $('<img src="pics/frame.png" class="drawnPosts">')
// var interval = 1000;
// setInterval(function() {
//    $('.make').append($newPostPics);
//    var timesAppended = 0;
//    timesAppended = timesAppended + 1;
// // console.log(timesAppended)
// },interval);

//Here I was trying to make a value of time that refreshed, so it felt more human and less here is a post every 5 seconds
// setInterval(function(getTime){
// var time = Math.random() * 30000;
// // console.log(time);
// },5000);





});
