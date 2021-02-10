$(document).ready(function(){
  setTimeout(function(){
    startSound.play();
    $(".splash").addClass("splashCircle");
  }, 1000);
  setTimeout(function(){
    $(".splash .text").show();
    $(".splash .text").addClass("flip");
    $(".splash .icon").show();
    $(".splash .icon").addClass("flipInX");
    $(".splash .smallText").show();
    $(".splash .smallText").addClass("fadeIn");
    setTimeout(function(){
      $(".splash2").show();
      $(".mainMenu").show();
      $(".splash").remove();
      //menuMusic.play();
      //re-add this line later!
      setTimeout(function(){
        alert("The game isn't stable!", "This game is still in the early development stages, it doesn't even have a name nor an icon...");
        $(".splash2").addClass("animated fadeOut");
        setTimeout(function(){
          $(".splash2").remove();
        }, 780);
      }, 3000);
    }, 4000);
  }, 1500);
});