var keyPressed = document.querySelector("key");
var keyCode = document.querySelector("#code");
var eventStatus = document.querySelector("#status");

function keydownAction(event) {
  //keyPressed.textContent = (event.keyCode);
  console.log(event.keyCode);
  console.log(event.key);dfds
}

function keyupAction(event) {

  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);



//var keydown = document.addEventListener("keydown", keydownAction)
//$("input").keydown(function(){
//  $("input").css("background-color", "yellow");
//});