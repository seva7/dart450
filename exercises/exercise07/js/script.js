/**********************************************

DART 450

**********************************************/


var voice = 'UK English Male';
var voiceParameters = {
  pitch: 2.5,
  rate: 1,
  volume: 1
}

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

$('.blast').mouseover(function () {
    // When a word is moused over, use responsive voice to speak
    // its text (e.g. the word itself)
    responsiveVoice.speak($(this).text(),voice,voiceParameters);
  });
// $(this).speak();

// <input onclick='responsiveVoice.speak("Hello World");' type='button' value='🔊 Play' />


  // // Basic dragging
  // $('#words').draggable();

  // var player = GetPlayer();
  // var textToSpeech = player.GetVar("textToSpeech");
  // responsiveVoice.speak(textToSpeech);
  //
  //







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
