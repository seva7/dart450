/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/


// var manifestoText = ['A designer is the übermensch, the liberator the creator the comedian the chef the negotiator the deal breaker the fanatic the fuck you and your ideals the loudest voice the always got something to say the call you out on your bullshit the monkey the self revealing self destructive constructive the respectful disrespect the historian the political the unafraid the always wanting better the helpful hand the fuck you.',
// 'Because we’ve had enough of all this. The values that have become apparent are not representative. We are being made to follow orthodox ideals that try to render any and all opposition useless. These ideals are harmful to the individuals mental state within the society. What we, and this manifesto puts forth, is to allow us, without contest and with cooperation, to become ourselves.','We write these words as people under 30, currently being welcomed to the human race. We won’t be complicit. As if anyone would care and they don’t, but it doesn’t matter because it is not about them it is about us, of our knowing of it and acting on it. We must realize what was lost and what was given, how much of a privilege it is and maximize and reciprocate it for others. ','We must constantly ask ourselves; “Is what was destroyed for me worth what I will make with it?” We have a duty to continue, as we are the future that the past dreamed of.',
// 'You have a duty if you call yourself a designer, a creator, an artist, a member of society. Your beliefs; everything you wish for, everything you want, everything you have seen, everything you adhere to is in your work. We must remember that no creation is exclusive to any belief system. What we make, of what we make, and when we make it, is irrefutably referenced from what we believe. How we operate is what we believe. ',
// '']
// var completeManifesto: ['']
$(document).ready(function () {


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


  var i= 0;
  var updateInterval = 3000;
  var feelingName =
  ['ART','A TOOL','A WAY OF LIVING','A SOLUTION FOR OUR FUTURE','A METHOD OF CREATION','A MEME','THE TRUTH','AS THE FUCK YOU']

  var feelings = feelingName[i]
  var firstTime = true;


  function changingFeelings () {
  if( i===0 && firstTime=== true){
  var newDiv = $('<div id="submit" ></div>');
  newDiv.html('SUBMIT HERE IF YOU SEE DESIGN AS '+(feelingName[i]))
  i = i+1;

  newDiv.css({
  color :'blue'
  })

  // $('body').append(newDiv);
  firstTime = false;
  }
  else{
  $("#submit").html('SUBMIT HERE IF YOU SEE DESIGN AS '+(feelingName[i]));
  i = i+1;
  }
  if (i === feelingName.length ){
   i = 0;
  }
  }

  setInterval (changingFeelings,2000);


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  $('img').each(function () {
    var x = Math.random() * ($(window).width() - $(this).width());
    var y = Math.random() * ($(window).height() - $(this).height());
    $(this).css({
      top: y,
      left: x
    });
  });

  $('#submit').each(function () {
    var x = Math.random() * ($(window).width() - $(this).width());
    var y = Math.random() * ($(window).height() - $(this).height());
    $(this).css({
      top: y,
      left: x
    });
  });

  $('#email').each(function () {
    var x = Math.random() * ($(window).width() - $(this).width());
    var y = Math.random() * ($(window).height() - $(this).height());
    $(this).css({
      top: y,
      left: x
    });
  });


  $('img').on('mouseover',function () {
    var a = Math.random() * 500;
    var b = Math.random() * 800;
    var duration =
    // Math.random() *
    3000;
    $(this).animate({
      top: a,
      left: b,
    },duration);
  });


// this code makes the images move by themselves without mouse over!
  // setInterval(function () {
  //   $('img').each(function () {
  //   var a = Math.random() * 500;
  //   var b = Math.random() * 800;
  //   var duration =
  //   // Math.random() *
  //   3000;
  //   $(this).animate({
  //     top: a,
  //     left: b,
  //   },duration);
  // });
  // },3000);


  $('#submit').on('mouseover',function () {
    var a = Math.random() * 500;
    var b = Math.random() * 800;
    var duration = 3000;
    $(this).animate({
      top: a,
      left: b,
    },duration);
  });


  $('#email').on('mouseover',function () {
    console.log("Moused over email.")
    var a = Math.random() * 500;
    var b = Math.random() * 800;
    var duration = 3000;
    $(this).animate({
      top: a,
      left: b,
    },duration);
  });
});
