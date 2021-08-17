document.querySelector();
document.querySelectorAll();

function HouseKeeper (yearsOfExperience,name,age){
  this.yearsOfExperience = yearsOfExperience;
  this.name=name;
  this.age= age;
  this.clean = function(){
     alert("May I clean your room");
  }

}
