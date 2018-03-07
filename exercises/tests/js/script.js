/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/


var feelingSum = 3;
var currentFeeling = 0;
var feelings = ['art','a tool','the future'];
var feelingsIndex = feelings[boop];
var boop = (Math.floor(Math.random() *feelingSum)) % feelings.length;
var newFeeling = currentFeeling + 1
// var text = "submit if you see design as " + (boop);

  var text= 'submit if you see design as' + (newFeeling)

$(document).ready(function () {

  setInterval(function(){


  var feelingSum = 3;
  var currentFeeling = 0;
  var feelings = ['art','a tool','the future'];
  var feelingsIndex = feelings[boop];
  var boop = (Math.floor(Math.random() *feelingSum)) % feelings.length;
  var currentFeeling = currentFeeling + 1;

 text= 'submit if you see design as' + (currentFeeling)
console.log(currentFeeling)
},1000)
// feelingsIndex = feelings[boop];
// boop = (Math.floor(Math.random() *feelingSum)) % feelings.length;

  // Insert jQuery code here to run when the page is loaded
  // setInterval(function() {
  //   feelingSum = 3;
  //   feelings = ['art','a tool','the future'];
  //   feelingsIndex = feelings[boop];
  //   boop = (Math.floor(Math.random() *feelingSum)) % feelings.length;


    // var text = "submit if you see design as " + (boop);
    // $('body').append(text)
    // console.log(boop)
  // },1000);


$('body').append(text)

 // setInterval(function(){
 //
 //
 // })



});
