/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {
  $('img').each(function () {
    var x = Math.random() * ($(window).width() - $(this).width());
    var y = Math.random() * ($(window).height() - $(this).height());
    $(this).css({
      top: y,
      left: x
    });
  });
  $('img').on('mouseover',function () {
    var a = Math.random() * 200;
    var b = Math.random() * 800;
    var duration = Math.random() * 3000;
    $(this).animate({
      top: a,
      left: b,
    },duration);
  });
});
