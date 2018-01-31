/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {

  $('#start').on('click',function () {
    $(this).fadeOut(2000);
    setTimeout(function() {
      $('#second').fadeIn(2000);
    },2000);
  });

  $('#second').on('click',function () {
    $(this).fadeOut(2000);
    setTimeout(function() {
      $('#third').fadeIn(2000);
    },2000);
  });

  $('#third').on('click',function () {
    $(this).fadeOut(2000);
    setTimeout(function() {
      $('#fourth').fadeIn(2000);
      // $('#fifth').fadeIn(200000);
    },2000);
  });

  $('#fourth').on('click',function () {
    $(this).fadeOut(2000);
    setTimeout(function() {
      $('#sixth').fadeIn(2000);
    },2000);
  });

  $('#sixth').on('click',function () {
    $(this).fadeOut(2000);
    setTimeout(function() {
      $('#seventh').fadeIn(2000);
    },2000);
  });
  //
  // $('#fifth').on('click',function () {
  //   $(this).fadeOut(2000);
  //   setTimeout(function() {
  //     $('#sixth').fadeIn(2000);
  //   },2000);
  // });

//   $(start).show()
// // Insert jQuery code here to run when the page is loaded
//     $(start).on('click',function() {
//       $(start).hide()
//     });
//           if($(start).on('click',function()) {
//             $(start).hide()}); {
//             $(charles).show()
//           }
  $('#second').hide()

  $('#third').hide()

  $('#fourth').hide()

  $('#fifth').hide()

  $('#sixth').hide()

  $('#seventh').hide()

 // $('#charles').hide()

 //  $('#magician').hide()
 //
 //  $('#sword').hide()
 //
 // $('#shadow').hide()


});
