/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/


$(document).ready(function () {


var i= 0;
var updateInterval = 3000;
var feelingName =
['art','a tool','a way of living','a solution for our future','a method of creation','a meme']

var feelings = feelingName[i]
var firstTime = true;


function changingFeelings () {
if( i===0 && firstTime=== true){
var newDiv = $('<div id="firstDiv" ></div>');
newDiv.html('design as '+(feelingName[i]))
i = i+1;

newDiv.css({
color :'blue'
})

$('body').append(newDiv);
firstTime = false;
}
else{
$("#firstDiv").html('design as '+(feelingName[i]));
i = i+1;
}
if (i === feelingName.length ){
 i = 0;
}
}

setInterval (changingFeelings,2000);


});


//   setInterval(function(){
//   // $('.counterDiv').on('click',function(){
//     counter = counter + 1;
//     $('#counter').text(feelings);
//     feelings = feelingName[counter];
//   // })
//   },updateInterval);
// });
// // });
// function update (){
//   counter = counter + 1;
//   $('#counter').text(feelings);
//   feelings = feelingName[counter];
// }
//
// setInterval(function(){
// console.log("submit if you see art as",feelingName[counter])
// },3000)


// feelingsIndex = feelings[boop];
// boop = (Math.floor(Math.random() *feelingSum)) % feelings.length;
// // Insert jQuery code here to run when the page is loaded
//   setInterval(function() {
//     feelingSum = 3;
//     feelings = ['art','a tool','the future'];
//     feelingsIndex = feelings[boop];
//     boop = (Math.floor(Math.random() *feelingSum)) % feelings.length;
//     var text = "submit if you see design as " + (boop);
//     $('body').append(text)
//     console.log(boop)
//   },1000);
// $('body').append(text)
// });

 // setInterval(function(){
 //
 //
 // })
