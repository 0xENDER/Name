var canvas = document.getElementById("WorldCanvas"), engine =new BABYLON.Engine(canvas, true), createScene, showTheWorldWindow;

window.addEventListener("DOMContentLoaded", function(){
  //Note: add a script to block window resizing when playing!
  createScene = function(type = "debug"){//debug, flatWorld, normalWorld

    var scene = createWorld();
    if(type == "debug"){
      scene = generateBlocksTerrain(scene);
    }else if(type == "flatWorld"){
      //
    }else if(type == "normalWorld"){
      scene = generateAWorld(scene);
    }
    
    //Optimizer
    var optimizer = SceneOptimizer(scene);

    var camera = spectatorCamera(scene, canvas);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);

    
    var light = PointLight(scene, new BABYLON.Color3(1, 1, 1));
    light.parent = camera;

    var light2 = HemisphericLight(scene, BABYLON.Color3.Black());

    showTheWorldWindow(scene);//Call this function when the files are loaded!

    return scene;
  };
  showTheWorldWindow = function(scene){
    showMenu("loadingMenu", "worldWindow");
    //$("#WorldCanvas").show(0);
    $("#WorldCanvas--GUI").show(100);
    setTimeout(function(){
      scene.activeCamera.panningSensibility = 0.8;
      var FPSDiv = document.getElementById("FPS");
      var PositionDiv = document.getElementById("Position");
      var userPosition = scene.activeCamera.position;
      engine.runRenderLoop(function(){
        scene.render();
        FPSDiv.innerHTML = engine.getFps().toFixed() + "FPS";
        userPosition = scene.activeCamera.position;
        PositionDiv.innerHTML = Math.round(userPosition.x) + ", " + Math.round(userPosition.y) + ", " + Math.round(userPosition.z);
      });
      engine.resize();
      window.addEventListener("resize", function (){
        engine.resize();
      });
      lockMouse();
    }, 480);
  }
});
function loadAWorld(worldID){
  showLoadingScreen();
  setTimeout(function(){
    //var scene = createScene("debug");
    var scene = createScene("normalWorld");
  }, 1000);
}