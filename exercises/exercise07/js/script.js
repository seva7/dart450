/*

Blast.js template
Pippin Barr


*/

$(document).ready(function() {

  $('#testText').blast({
      delimiter: 'word'
    }).mouseover(makeEasy);

    // //
    // function fadeToPink () {
    //   $(this).animate({
    //       color: '#DA70D6	',
    //   },800);
    //   $(this).css({
    //     'font-family':'comic sans MS'
    //   });
    //   $(this).animate({
    //     color: 'blue',
    //   }, 600);

  });

    function makeEasy() {
      $(this).attr({
        class: "happy"
        
      })
    };
