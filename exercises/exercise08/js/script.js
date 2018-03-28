/*

ScrollMagic with Events
Pippin Barr

An example of using ScrollMagic based on the various events you
can track with it.

Uses:

ScrollMagic
http://scrollmagic.io/

*/

var controller;

$(document).ready(function() {

  // Create a controller for ScrollMagic
  // (Have to do this whenever you start using it)
  controller = new ScrollMagic.Controller();

  // Make a new scene for handling scrolling in our #trigger element
  // A 'scene' is used for all the events related to one trigger element.
  // The 'duration' is used to be able to check how _much_ of the element
  // we have scrolled through, which can be helpful. It is a duration in pixels.
  var topBunScene = new ScrollMagic.Scene({
    triggerElement: ".topBun",
  })
    .setPin(".topBun")

  // Put the trigger higher up on the scrollbar (the trigger hook is the location on
  // the page that triggers things)
  topBunScene.triggerHook(0.3);
  // Add debugging indicators
  // (To use this you need to include the plugins/debug.addIndicators.min.js file
  // in your index.html)
  // topBunScene.addIndicators();
  // Add to the controller to it works
  topBunScene.addTo(controller);


  var lettuceScene = new ScrollMagic.Scene({
    triggerElement: ".lettuce",
  })
    .setPin(".lettuce")
  lettuceScene.triggerHook(0.305);
  // lettuceScene.addIndicators();
  lettuceScene.addTo(controller);

  var tomatoesScene = new ScrollMagic.Scene({
    triggerElement: ".tomatoes",
  })
    .setPin(".tomatoes")
  tomatoesScene.triggerHook(0.37);
  // tomatoesScene.addIndicators();
  tomatoesScene.addTo(controller);

  var baconScene = new ScrollMagic.Scene({
    triggerElement: ".bacon",
  })
    .setPin(".bacon")
  baconScene.triggerHook(0.41);
  // baconScene.addIndicators();
  baconScene.addTo(controller);

  var cheeseScene = new ScrollMagic.Scene({
    triggerElement: ".cheese",
  })
    .setPin(".cheese")
  cheeseScene.triggerHook(0.42);
  // cheeseScene.addIndicators();
  cheeseScene.addTo(controller);

  var meatScene = new ScrollMagic.Scene({
    triggerElement: ".meat",
  })
    .setPin(".meat")
  meatScene.triggerHook(0.47);
  // meatScene.addIndicators();
  meatScene.addTo(controller);

  var bottomBunScene = new ScrollMagic.Scene({
    triggerElement: ".bottomBun",
  })
    .setPin(".bottomBun")
  bottomBunScene.triggerHook(0.53);
  // bottomBunScene.addIndicators();
  bottomBunScene.addTo(controller);

});
