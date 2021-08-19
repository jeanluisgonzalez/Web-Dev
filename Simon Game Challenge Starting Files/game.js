
var gamePattern = [];
var userClickedPattern =[];
var buttonsColours = ["blue","yellow","green","red"];
$(document).on("keydown",function(){
  nextSequence();
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
    console.log(userClickedPattern);
  });
  $(document).off("keydown");
});












function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonsColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
  animateColor(randomChosenColour);
  playSounds(randomChosenColour);
}
function playSounds(color){
  var colorAudio = new Audio("sounds/"+color+".mp3");
  colorAudio.play();
}
function animateColor(selector){
  $("." + selector).fadeIn(100).fadeOut(100).fadeIn(100);
  $("." + selector).addclass("pressed");
  setTimeout(function(){
    $("." + selector).removeClass("pressed");
  },100);


}
