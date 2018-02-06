/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {

  // Insert jQuery code here to run when the page is loaded

  // if ($(window).css("width") >= 600 {
  //   $('body').css({backgroundColor:'#f00'});
  // }

setInterval(function() {
  if ($(window).width() > 600) {
    $("#nope").hide();
  }
  else {
    $("#nope").show();
  }
  
},100);


});
