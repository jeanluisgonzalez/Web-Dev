
$("button").click(function(){
  $("h1").css("color","purple");
});

$("button").on("click",function(){
  $("h1").animate({opacity: 0.5});
});

$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");
