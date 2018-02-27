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

// BOOK
var nextBookImageNumber = 1
// This is the amount of pictures to be shown
var numBookImages = 5

// BUFFET
var nextBuffetImageNumber = 1
// This is the amount of pictures to be shown
var numBuffetImages = 4

// COVER
var nextCoverImageNumber = 1
// This is the amount of pictures to be shown
var numCoverImages = 3

// FRAME
var nextFrameImageNumber = 1
// This is the amount of pictures to be shown
var numFrameImages = 3

// GRAPHIC POSTER
var nextGraphImageNumber = 1
// This is the amount of pictures to be shown
var numGraphImages = 3

// ILLUSTRATIONS
var nextIlluImageNumber = 1
// This is the amount of pictures to be shown
var numIlluImages = 2

// PYRITE
var nextPyrImageNumber = 1
// This is the amount of pictures to be shown
var numPyrImages = 4

// SOFA
var nextSofaImageNumber = 1
// This is the amount of pictures to be shown
var numSofaImages = 4

// TABLE
var nextTableImageNumber = 1
// This is the amount of pictures to be shown
var numTableImages = 3


$(document).ready(function () {

// function info () {
//   alert("Work by Sevan Belleau. You can reach me at sevanbelleau@gmail.com")
// }

  // THIS IS FOR THE HIDDEN PIXEL
  // the .jpg can be a zip file to be downloaded
  // var $link = $('<a href="items/illu005.jpg" target="_blank"></a>') ;
  // $link.addClass('hiddenPixel');
  // var x = Math.random() * ($(window).width() - $link.width());
  // var y = Math.random() * ($(window).height() - $link.height());
  // $link.css({
  //   top: y,
  //   left: x,
  // })

  var $link = $('<a href="pics/clickMe.rtf" target="_blank"></a>') ;
  $link.addClass('circle');
  var x = Math.random() * ($(window).width() - $link.width());
  var y = Math.random() * ($(window).height() - $link.height());
  $link.css({
    top: y,
    left: x,
  })
 // $('#circle').on('click', info)

  $('body').append($link);
  // THE IS THE END OF THE HIDDEN PIXEL

  // Hidding all main page elements to ask about feelings
  $('#second').hide()
  // End of feelings thing


  // Insert jQuery code here to run when the page is loaded
  $('#button').click(function(){

    // This code is to remove imput and replace it with .val('ok')
    var inputString = $('#input').val();
    // removes imput to be nice to people
    $('#input').val('ok')
    // End of input modification

    // This fades out the input field and merges in the projects
    $('#one').fadeOut(2000);
    setTimeout(function() {
      $('#second').fadeIn(2000);
    },2000);
    // End of fade of code

    // The inputString.charCodeAt set a numerical value for the first, second and third letter of
    // the 'input' about feelings. The var colourIndex just sets the modulo to make sure the result is within
    // the array.
    var letterSum = inputString.charCodeAt(0)+inputString.charCodeAt(1)+inputString.charCodeAt(2);
    var colourIndex = letterSum % colours.length;

    // This changes the background based on the result of colourIndex which then sets the backgroundColor
    $('body').css({
      //    (colours)this is the array ([colourIndex] a number the first and last of the array to be taken at that place)
      backgroundColor: colours[colourIndex]
      // This is the end of the background color change

      // the }) underneath marks the end of $('body')
    })
    // The })underneath marks the end of $('button.click(function())')
  })



  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


  // WHEN CLICKING ON A PICTURE, IT STARTS fun addNextFrameImage
  $('#frame1').on('click',addNextFrameImage);
  // $('.frame').draggable({containment: 'window'})

  $('#book1').on('click',addNextBookImage)

  $('#buffet1').on('click',addNextBuffetImage)

  $('#cover1').on('click',addNextCoverImage)

  $('#pyr1').on('click',addNextPyrImage)

  $('#sofa1').on('click',addNextSofaImage)

  $('#table1').on('click',addNextTableImage)
  // The }) underneath marks the end of $(document).ready(function () {
});
// This is for the Frames
// FUNCTION OF ADDING THE NEXT IMAGE
function addNextFrameImage(){
  var $image = $('<img>');

  $image.on('click',addNextFrameImage);
  $image.attr({
    class: "frame",
    src: "pics/Frame"+ (nextFrameImageNumber) +".jpg"
  });

  var x = Math.floor(20 - Math.random() * 40);
  var y = Math.floor(20 - Math.random() * 40);
  $image.css({
    top: y + 'px',
    left: x + 'px',
  });
  $('#frames').append($image);

  // This makes the content created draggable
  $image.draggable({containment: 'window'});

  // This makes the next picture come as a result of the clicking by adding '1' the the name of image
  nextFrameImageNumber = (nextFrameImageNumber+1) % numFrameImages;
  // console.log("Next image is " + nextImageNumber);
}
// END OF FUNCTION ADDING THE NEXT IMAGE


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// This is for the Book
// FUNCTION OF ADDING THE NEXT IMAGE
function addNextBookImage(){
  var $imageBook = $('<img>');

  $imageBook.on('click',addNextBookImage);
  $imageBook.attr({
    class: "book",
    src: "pics/book"+ (nextBookImageNumber) +".jpg"
  });

  var xB = Math.floor(20 - Math.random() * 40);
  var yB = Math.floor(20 - Math.random() * 40);
  $imageBook.css({
    top: yB + 'px',
    left: xB + 'px',
  });
  $('#books').append($imageBook);

  // This makes the content created draggable
  $imageBook.draggable({containment: 'window'});

  // This makes the next picture come as a result of the clicking by adding '1' the the name of image
  nextBookImageNumber = (nextBookImageNumber+1) % numBookImages;
  // console.log("Next image is " + nextBookImageNumber);
}
// END OF FUNCTION ADDING THE NEXT IMAGE


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// This is for the Buffet
// FUNCTION OF ADDING THE NEXT IMAGE
function addNextBuffetImage(){
  var $imageBuffet = $('<img>');

  $imageBuffet.on('click',addNextBuffetImage);
  $imageBuffet.attr({
    class: "buffet",
    src: "pics/buff"+ (nextBuffetImageNumber) +".jpg"
  });

  var xB = Math.floor(20 - Math.random() * 40);
  var yB = Math.floor(20 - Math.random() * 40);
  $imageBuffet.css({
    top: yB + 'px',
    left: xB + 'px',
  });
  $('#buffets').append($imageBuffet);

  // This makes the content created draggable
  $imageBuffet.draggable({containment: 'window'});

  // This makes the next picture come as a result of the clicking by adding '1' the the name of image
  nextBuffetImageNumber = (nextBuffetImageNumber+1) % numBuffetImages;
  // console.log("Next image is " + nextBuffetImageNumber);
}
// END OF FUNCTION ADDING THE NEXT IMAGE


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// This is for the cover
// FUNCTION OF ADDING THE NEXT IMAGE
function addNextCoverImage(){
  var $imageCover = $('<img>');

  $imageCover.on('click',addNextCoverImage);
  $imageCover.attr({
    class: "cover",
    src: "pics/cover"+ (nextCoverImageNumber) +".jpg"
  });

  var xB = Math.floor(20 - Math.random() * 40);
  var yB = Math.floor(20 - Math.random() * 40);
  $imageCover.css({
    top: yB + 'px',
    left: xB + 'px',
  });
  $('#covers').append($imageCover);

  // This makes the content created draggable
  $imageCover.draggable({containment: 'window'});

  // This makes the next picture come as a result of the clicking by adding '1' the the name of image
  nextCoverImageNumber = (nextCoverImageNumber+1) % numCoverImages;
  console.log("Next image is " + nextCoverImageNumber);
}
// END OF FUNCTION ADDING THE NEXT IMAGE


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// This is for the Pyrite
// FUNCTION OF ADDING THE NEXT IMAGE
function addNextPyrImage(){
  var $imagePyr = $('<img>');

  $imagePyr.on('click',addNextPyrImage);
  $imagePyr.attr({
    class: "pyr",
    src: "pics/pyr"+ (nextPyrImageNumber) +".jpg"
  });

  var xB = Math.floor(20 - Math.random() * 40);
  var yB = Math.floor(20 - Math.random() * 40);
  $imagePyr.css({
    top: yB + 'px',
    left: xB + 'px',
  });
  $('#pyrs').append($imagePyr);

  // This makes the content created draggable
  $imagePyr.draggable({containment: 'window'});

  // This makes the next picture come as a result of the clicking by adding '1' the the name of image
  nextPyrImageNumber = (nextPyrImageNumber+1) % numPyrImages;
  console.log("Next image is " + nextPyrImageNumber);
}
// END OF FUNCTION ADDING THE NEXT IMAGE


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// This is for the sofa
// FUNCTION OF ADDING THE NEXT IMAGE
function addNextSofaImage(){
  var $imageSofa = $('<img>');

  $imageSofa.on('click',addNextSofaImage);
  $imageSofa.attr({
    class: "sofa",
    src: "pics/sofa"+ (nextSofaImageNumber) +".jpg"
  });

  var xB = Math.floor(20 - Math.random() * 40);
  var yB = Math.floor(20 - Math.random() * 40);
  $imageSofa.css({
    top: yB + 'px',
    left: xB + 'px',
  });
  $('#sofas').append($imageSofa);

  // This makes the content created draggable
  $imageSofa.draggable({containment: 'window'});

  // This makes the next picture come as a result of the clicking by adding '1' the the name of image
  nextSofaImageNumber = (nextSofaImageNumber+1) % numSofaImages;
  console.log("Next image is " + nextSofaImageNumber);
}
// END OF FUNCTION ADDING THE NEXT IMAGE


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// This is for the table
// FUNCTION OF ADDING THE NEXT IMAGE
function addNextTableImage(){
  var $imageTable = $('<img>');

  $imageTable.on('click',addNextTableImage);
  $imageTable.attr({
    class: "table",
    src: "pics/table"+ (nextTableImageNumber) +".jpg"
  });

  var xB = Math.floor(20 - Math.random() * 40);
  var yB = Math.floor(20 - Math.random() * 40);
  $imageTable.css({
    top: yB + 'px',
    left: xB + 'px',
  });
  $('#tables').append($imageTable);

  // This makes the content created draggable
  $imageTable.draggable({containment: 'window'});

  // This makes the next picture come as a result of the clicking by adding '1' the the name of image
  nextTableImageNumber = (nextTableImageNumber+1) % numTableImages;
  console.log("Next image is " + nextTableImageNumber);
}
// END OF FUNCTION ADDING THE NEXT IMAGE


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
