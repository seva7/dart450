/**********************************************

DART 450, Winter 2018
PoRtFoLiO
Sévan B

Description of what the script does...

**********************************************/
// these are all the colours possible in my array
var colours = [ '#f4f142','#f9f786','#f9ce85','#ffaa1c',
'#ce421e','#e07e64','#95e064','#58c90e',
'#1abc4b','#62d183','#6bc6b0','#13bf95',
'#0dbac6','#8cebf2','#0c588e','#2d8bce',
'#4c88b2','#1745ed','#6b83db','#8d62af',
'#7b0ad1','#cc2ac9','#dd6cdb','#e8b2e7',
'#861657','#A64253','#D56AA0','#BBDBB4',
'#FCF0CC','#7180AC','#2B4570','#A8D0DB',
'#E49273','#A37A74','#FC9F5B','#FBD1A2',
'#ECE4B7','#7DCFB6','#33CA7F','#F7F9F9',
'#E0D0C1','#A76D60','#601700','#141115',
'#4C2B36','#8D6346','#DDF45B','#C6F91F',
'#FB6107','#F3DE2C','#7CB518','#5C8001',
'#FBB02D','#D1603D','#DDB967','#D0E37F',
'#CCC7B9','#EAF9D9','#E2D4BA','#AF7A6D',
'#D3D57C','#C7AA74','#677F7E','#8896AB',
'#C5D5E4','#EFBDEB','#B68CB8','#6461A0',
'#314CB6','#0A81D1','#6BA292','#35CE8D',]



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


  $('#second').hide()

  // Insert jQuery code here to run when the page is loaded
$('#button').click(function(){
// This code is to remove imput and replace it with .val('ok')
  var inputString = $('#input').val();
// removes imput to be nice to people
  $('#input').val('ok')

  $('#one').fadeOut(2000);
  setTimeout(function() {
     $('#second').fadeIn(2000);
   },2000);

  var letterSum = inputString.charCodeAt(0)+inputString.charCodeAt(1)+inputString.charCodeAt(2);
  var colourIndex = letterSum % colours.length;

 $('body').css({
   //    (colours)this is the array ([colourIndex] a number the first and last of the array to be taken at that place)
   backgroundColor: colours[colourIndex]


    })
  })
});
