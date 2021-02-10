function UpdateButtonsClicks(){
  $("button").off("mouseover");
  //$("button").off("focus");
  $("button").off("mousedown");
  $("button").off("mouseup");
  $("button").mouseover(function(){
    var This = $(this);
    hoverSound.play();
    This.addClass("animated pulse faster");
    setTimeout(function(){
      This.removeClass("animated");
      This.removeClass("pulse");
      This.removeClass("faster");
    }, 200);
  });
  $("button").mouseleave(function(){
      
  });
  /*$("button").focus(function(){
    hoverSound.play();
  });*/
  $("button").mousedown(function(){
    var This = $(this);
    ClickSound.play("MouseDown");
    This.addClass("animated rubberBand fast");
    setTimeout(function(){
      This.removeClass("animated");
      This.removeClass("rubberBand");
      This.removeClass("fast");
    }, 300);
  });
  $("button").mouseup(function(){
    ClickSound.play("MouseUp");
  });
  $(".clickSound1").click(function(){
    var This = $(this);
    This.addClass("brightness");
    setTimeout(function(){
      ClickSound2.play("cut");
    }, 10);
    setTimeout(function(){
      This.removeClass("brightness");
    }, 100);
  });
}
$(document).ready(function(){
  UpdateButtonsClicks();
});
function showMenu(oldID, newID){
  if(newID != "mainMenu"){
    $("." + oldID).addClass("animated fadeOut faster");
    setTimeout(function(){
      $("." + newID).show();
      $("." + newID).addClass("animated fadeInRight fast-ish");
      menuOpen.play();
      setTimeout(function(){
        $("." + oldID).hide();
        $("." + oldID).removeClass("animated");
        $("." + oldID).removeClass("fadeOut");
        $("." + oldID).removeClass("faster");
        $("." + newID).removeClass("animated");
        $("." + newID).removeClass("fadeInRight");
        $("." + newID).removeClass("fast-ish");
      }, 500);
    }, 100)
  }else{
    $("." + oldID).addClass("animated fadeOutLeft fast-ish");
    $("." + newID).show();
    $("." + newID).addClass("animated fadeIn fast-ish");
    menuClose.play();
    setTimeout(function(){
      $("." + oldID).hide();
      $("." + oldID).removeClass("animated");
      $("." + oldID).removeClass("fadeOutLeft");
      $("." + oldID).removeClass("fast-ish");
      $("." + newID).removeClass("animated");
      $("." + newID).removeClass("fadeIn");
      $("." + newID).removeClass("fast-ish");
    }, 500);
  }
}