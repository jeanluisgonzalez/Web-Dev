
var gamePattern = [];
var userClickedPattern =[];
var buttonsColours = ["blue","yellow","green","red"];
var level = 0;
var count = 0;
$(document).on("keydown",function(){
  nextSequence();
  levelUpdate();

  // buttonsColours.forEach(function(index){
  //   $("#"+index).click(function(){
  //     playSounds(index);
  //     animateColor(index);
  //
  //   });
  // });
  $(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSounds(userChosenColour);
    animateColor(userChosenColour);
    console.log("userClickedPattern: "+userClickedPattern);
    checkPattern();





  });
  $(document).off("keydown");
});












function nextSequence(){
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
  $("." + selector).addClass("pressed");
  setTimeout(function(){
    $("." + selector).removeClass("pressed");
  },100);
}
function levelUpdate(){
  $("#level-title").text("Level " + level);
}
function checkPattern(){
  for (i = 0; i < userClickedPattern.length; i++){
    if(gamePattern[i] === userClickedPattern[i]){
      count++;
      console.log("success");
    }else {
      count=0;
      level=0;
      userClickedPattern.length = 0;
      gamePattern.length=0;
      console.log("wrong");
    }
  }
if (gamePattern.length === userClickedPattern.length){
  userClickedPattern.length = 0;
  count=0;
  setTimeout(function(){
    nextSequence();
  },1500);

}

}
