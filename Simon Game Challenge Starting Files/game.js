var gamePattern = [];
var buttonsColours = ["blue","yellow","green","red"];
nextSequence();
var selector =  gamePattern[gamePattern.length - 1];


$("#"+selector).click(function(){
  var colorAudio = new audio("sounds/"+$(this).attr('id')+".mp3");
  colorAudio.play();
}).fadeToggle().fadeToggle();




function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonsColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
}
