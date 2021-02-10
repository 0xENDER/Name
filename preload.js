const win = require('electron').remote.getCurrentWindow();
window["win"] = win;
//window["win"].setFullScreen(true/false);
document.addEventListener("DOMContentLoaded", function(event){
  //win.maximize();
  setTimeout(function(){
    win.show();
    win.focus();
    document.getElementById("FPS").addEventListener("click", function(){
      window["win"].webContents.openDevTools();
    });
  }, 0);
});
global.require = (text) => {
  return require(text);
}