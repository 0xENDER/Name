function CheckScreenSize(){
  if(window.outerWidth < 980 || window.outerHeight < 600){
    alert("Your device isn't supported, the game won't work as intended!");
  }
}
CheckScreenSize();
$(window).resize(function(){
  CheckScreenSize();
});