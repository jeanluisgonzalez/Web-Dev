var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');
var crash = new Audio('sounds/crash.mp3');
var kick = new Audio('sounds/kick-bass.mp3');
var snare = new Audio('sounds/snare.mp3');
document.querySelectorAll(".drum").forEach(element => element.addEventListener("mousedown", function() {
  var key = element.textContent;
  playSounds(key);
  buttonAnimation("add", key);
}));
document.querySelectorAll(".drum").forEach(element => element.addEventListener("mouseup", function() {
  var key = element.textContent;
  buttonAnimation("remove", key);
}));

document.addEventListener('keydown', function(event) {
  var key = event.key;
  playSounds(key);
  buttonAnimation("add", key);

});
document.addEventListener('keyup', function(e) {
  buttonAnimation("remove", event.key);
});

function playSounds(key) {
  switch (key) {
    case "w":
      tom1.play();
      break;
    case "a":
      tom2.play();
      break;
    case "s":
      tom3.play();
      break;
    case "d":
      tom4.play();
      break;
    case "j":
      crash.play();
      break;
    case "k":
      kick.play();
      break;
    case "l":
      snare.play();
      break;
    default:
      console.log(key);
  }
}
  function buttonAnimation(condition, key) {
      var activeButton = document.querySelector("." + key);
      if (condition == "add") {
        switch (key) {
          case "w":
            activeButton.classList.add("pressed");
            break;
          case "a":
            activeButton.classList.add("pressed");
            break;
          case "s":
            activeButton.classList.add("pressed");
            break;
          case "d":
            activeButton.classList.add("pressed");
            break;
          case "j":
            activeButton.classList.add("pressed");
            break;
          case "k":
            activeButton.classList.add("pressed");
            break;
          case "l":
            activeButton.classList.add("pressed");
            break;
          default:
            console.log(key);
        }
      }else if(condition == "remove"){
          switch (key) {
            case "w":
              activeButton.classList.remove("pressed");
              break;
            case "a":
              activeButton.classList.remove("pressed");
              break;
            case "s":
              activeButton.classList.remove("pressed");
              break;
            case "d":
              activeButton.classList.remove("pressed");
              break;
            case "j":
              activeButton.classList.remove("pressed");
              break;
            case "k":
              activeButton.classList.remove("pressed");
              break;
            case "l":
              activeButton.classList.remove("pressed");
              break;
            default:
              console.log(key);
          }
        }else{
          switch (key) {
            case "w":
              activeButton.classList.toggle("pressed");
              break;
            case "a":
              activeButton.classList.toggle("pressed");
              break;
            case "s":
              activeButton.classList.toggle("pressed");
              break;
            case "d":
              activeButton.classList.toggle("pressed");
              break;
            case "j":
              activeButton.classList.toggle("pressed");
              break;
            case "k":
              activeButton.classList.toggle("pressed");
              break;
            case "l":
              activeButton.classList.toggle("pressed");
              break;
            default:
              console.log(key);
          }
        }

      }
