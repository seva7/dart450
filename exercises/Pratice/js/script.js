/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/
// these are all the colours possible in my array
var colours = [ '#f4f142','#f9f786','#f9ce85','#ffaa1c',
'#ce421e','#e07e64','#95e064','#58c90e',
'#1abc4b','#62d183','#6bc6b0','#13bf95',
'#0dbac6','#8cebf2','#0c588e','#2d8bce',
'#4c88b2','#1745ed','#6b83db','#8d62af',
'#7b0ad1','#cc2ac9','#dd6cdb','#e8b2e7',]

$(document).ready(function () {

// the .jpg can be a zip file to be downloaded
var $link = $('<a href="items/illu005.jpg" target="_blank"></a>') ;
$link.addClass('hiddenPixel');
var x = Math.random() * ($(window).width() - $link.width());
var y = Math.random() * ($(window).height() - $link.height());
$link.css({
  top: y,
  left: x,
})
$('body').append($link);



  // Insert jQuery code here to run when the page is loaded
$('#button').click(function(){

  var inputString = $('#input').val();
// removes imput to be nice to people
  $('#input').val('ok')

  var letterSum = inputString.charCodeAt(0)+inputString.charCodeAt(1)+inputString.charCodeAt(2);
  var colourIndex = letterSum % colours.length;

// rgb(123,343,53)
 $('body').css({
   //    (colours)this is the array ([colourIndex] a number the first and last of the array to be taken at that place)
   backgroundColor: colours[colourIndex]
   // 'rgb(' + firstLetter + ',' + secondLetter + ',' + thirdLetter + ')'
 })


  console.log(firstLetter,thirdLetter)
})
});


 // charCodeAt is to get the first,second,third character
//   var firstLetter = Math.floor((inputString.charCodeAt(0)/127)*255);
//   var secondLetter = Math.floor((inputString.charCodeAt(1)/127)*255);
//   var thirdLetter = Math.floor((inputString.charCodeAt(2)/127)*255);
