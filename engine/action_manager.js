/*scene.actionManager = new BABYLON.ActionManager(scene);
scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction({trigger: BABYLON.ActionManager.OnKeyUpTrigger, parameter: " "}, function(){
  light.setEnabled(!light.isEnabled());
}));*/
$(document).keyup(function(e){
  if(e.key === "Escape"){
    document.exitPointerLock();
  }
});