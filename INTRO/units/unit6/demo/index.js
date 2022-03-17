$(".yes").click(function(){
    $(".yes").hide();
    $(".no").hide();
    $(".bakery").hide();
    $("h1").text("Brown or Pink?");
    $(".cake").show();
    $(".bc").show();
    $(".pc").show(); });
 
    $(".no").click(function(){
      $(".yes").hide();
    $(".no").hide();
    $(".bakery").hide();
      $("h1").text("sorry.");
    
    });
$(".bc").click(function(){
     $(".fork").show();
    $(".spoon").show();
    $(".bc").hide();
    $(".pc").hide();
     $(".cake").hide();
    $("h1").text("Fork or Spoon?");
    $(".cultery").show();
  
  });

$(".pc").click(function(){
     $(".fork").show();
    $(".spoon").show();
    $(".bc").hide();
    $(".pc").hide();
     $(".cake").hide();
    $("h1").text("Fork or Spoon?");
    $(".cultery").show();
  
  });

$(".fork").click(function(){
      $(".fork").hide();
    $(".spoon").hide();
     $(".cultery").hide();
    $("h1").text("Cake is stuck in your throat!");
    $(".Choke").show();
    $(".Water").show();
     $(".water").show();
     });

$(".spoon").click(function(){
      $(".fork").hide();
    $(".spoon").hide();
     $(".cultery").hide();
    $("h1").text("Cake is stuck in your throat!");
    $(".Choke").show();
    $(".Water").show();
     $(".water").show();
     });

$(".Choke").click(function(){
    $(".Choke").hide();
    $(".Water").hide();
    $("h1").text("You're Dead. :(");
    $(".die now").show();
    $(".die later").show();
     $(".water").hide();
     $(".dead").show();
       });

$(".Water").click(function(){
    $(".Choke").hide();
    $(".Water").hide();
    $("h1").text("It didn't work! What Now!!");
    $(".die").show();
    $(".diee").show();
       $(".water").hide();
       });

$(".die").click(function(){
   $(".die").hide();
    $(".diee").hide();
$("h1").text("You're Dead. :(");
      $(".dead").show();
       });
    
    $(".diee").click(function(){
   $(".die").hide();
    $(".diee").hide();
$("h1").text("....Now You're Dead. :(");   
          $(".dead").show();
    });






































