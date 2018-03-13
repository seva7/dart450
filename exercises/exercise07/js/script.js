/**********************************************

DART 450

**********************************************/


$(document).ready(function () {


  $('#words').blast({
      delimiter: 'word'
    });
  $('.blast').addClass('word');

  $('.blast').each(function () {

    // We add an id based on the unique index
    // $(this).attr('id');
    $(this).draggable();

});
// $(this).speak();

// <input onclick='responsiveVoice.speak("Hello World");' type='button' value='🔊 Play' />


  // // Basic dragging
  // $('#words').draggable();

  var player = GetPlayer();
  var textToSpeech = player.GetVar("textToSpeech");
  responsiveVoice.speak(textToSpeech);









  // Constrain the dragging to a container
  // $('img').draggable({
  //   containment: 'window'
  // });

  // Constrain the axis of dragging
  // $('img').draggable({
  //   axis: 'x'
  // });

  // Use event handlers
  // $('img').draggable({
  //   start: dragStarted,
  //   stop: dragFinished
  // });

});

// // dragStarted
// function dragStarted(ui) {
//   // Make it greyscale while dragging
//   $(this).addClass('greyscale');
// }
//
// // dragFinished
// //
// // Called when the user drags and then lets go of the image
// function dragFinished() {
//   // Remove the greyscale
//   $(this).removeClass('greyscale');
// }
