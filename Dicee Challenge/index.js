
var randomNumber1 = randomNumberGenerator();
var randomNumber2 = randomNumberGenerator();
var imgRef1 ="images/dice"+randomNumber1+".png";
var imgRef2 ="images/dice"+randomNumber2+".png";
var h1Text= "";
if(randomNumber1 > randomNumber2){
  h1Text="Player 1 Wins!";
}else if (randomNumber1 === randomNumber2 ){
  h1Text="Draw!";
}else {
  h1Text="Player 2 Wins!";
}
document.querySelector("h1").textContent=h1Text;
document.querySelector(".img1").setAttribute("src",imgRef1);
document.querySelector(".img2").setAttribute("src",imgRef2);

function randomNumberGenerator(){
  return Math.floor((Math.random() * 6) + 1);
}
