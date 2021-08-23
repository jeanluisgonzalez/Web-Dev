
var gamePattern = [];
var userClickedPattern =[];
var buttonsColours = ["blue","yellow","green","red"];
var level = 0;
var started =false;
$(document).on("keydown",function(){
  if(!started){
    nextSequence();
    levelUpdate();
    started = true;
  }

});

$(".btn").click(function(){
  if(started){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSounds(userChosenColour);
    animateColor(userChosenColour);
    console.log("userClickedPattern: "+userClickedPattern);
    checkPattern(userClickedPattern.length-1);
  }


});










function nextSequence(){

  userClickedPattern = [];
  level++;
  levelUpdate();
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonsColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log("gamePattern: " + gamePattern);
  $("." + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSounds(randomChosenColour);
}
function playSounds(color){
  var colorAudio = new Audio("sounds/"+color+".mp3");
  colorAudio.play();
}
function animateColor(selector){
  if(selector==="wrong"){
    $("body" ).addClass("game-over");
    setTimeout(function(){
      $("body" ).removeClass("game-over");
    },200);
  }else{
    $("." + selector).addClass("pressed");
  setTimeout(function(){
    $("." + selector).removeClass("pressed");
  },100);
}}

function levelUpdate(){
  $("#level-title").text("Level " + level);
}
function checkPattern(currentLevel){

    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
      console.log("success");
      if (gamePattern.length === userClickedPattern.length){

        setTimeout(function(){
          nextSequence();
        },1500);

      }
    }else {
      startOver();
      playSounds("wrong");
      animateColor("wrong");
      $("#level-title").text("Game Over, Press Any Key to Restart");
    }
}
function startOver(){
  level= 0;
  gamePattern = [];
  started = false;

}
