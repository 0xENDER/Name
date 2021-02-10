var gF1, gF2;
function alert(title, message, type = "ok", f1 = function(){}, f2 = function(){}){
  document.exitPointerLock();
  gF1 = f1;
  gF2 = f2;
  alertSound.play();
  $(".alertBakcground").show();
  $(".alertBakcground").addClass("animated fadeIn faster");
  setTimeout(function(){
    $(".alertBakcground").removeClass("animated");
    $(".alertBakcground").removeClass("fadeIn");
    $(".alertBakcground").removeClass("faster");
  }, 200);
  $(".alert").show();
  $(".alert").addClass("animated bounceIn fast-ish");
  setTimeout(function(){
    $(".alert").removeClass("animated");
    $(".alert").removeClass("bounceIn");
    $(".alert").removeClass("fast-ish");
  }, 200);
  if(type == "ok"){
    $(".OnlyOk").show();
    $(".OnlyOk .title").text(title);
    $(".OnlyOk .message").text(message);
  }else if(type == "YesOrNo"){
    $(".YesOrNo").show();
    $(".YesOrNo .title").text(title);
    $(".YesOrNo .message").text(message);
  }
}
function HideAlertMenu(){
  alertExitSound.play("cut");
  $(".alert").addClass("animated bounceOut fast-ish");
  setTimeout(function(){
    $(".alert").removeClass("animated");
    $(".alert").removeClass("bounceOut");
    $(".alert").removeClass("fast-ish");
    $(".alertBakcground").hide();
    $(".alert").hide();
    $(".OnlyOk").hide();
    $(".YesOrNo").hide();
  }, 260);
}
$(document).ready(function(){
  $("#OnlyOk--Button").click(function(){
    HideAlertMenu();
    gF1();
  });
  $("#YesOrNo--Yes").click(function(){
    HideAlertMenu();
    gF1();
  });
  $("#YesOrNo--No").click(function(){
    HideAlertMenu();
    gF2();
  });
});