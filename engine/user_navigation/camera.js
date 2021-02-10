/*
var camera = freeCamera(scene);
camera.setTarget(BABYLON.Vector3.Zero());
camera.attachControl(canvas, true);
*/

/*
const freeCamera = function(scene){
  var camera = new BABYLON.FreeCamera("freeCamera", new BABYLON.Vector3(0, 0, -10), scene);
  camera.keysUp.push(87);
  camera.keysDown.push(83);
  camera.keysLeft.push(65);
  camera.keysRight.push(68);
  return camera;
}
*/

//scene.activeCamera.panningSensibility = 1;
/*
var camera = arcRotateCamera(scene, box.position);
camera.attachControl(canvas, true);
*/

/*
const arcRotateCamera = function(scene, position){
  var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", BABYLON.Tools.ToRadians(45), BABYLON.Tools.ToRadians(45), 10.0, position, scene);
  return camera;
}
*/

/*
var camera = followCamera(scene, box);
camera.attachControl(canvas, true);
*/

/*
const followCamera = function(scene, target){
  var camera = new BABYLON.FollowCamera("followCamera", BABYLON.Vector3.Zero(), scene);
  camera.lockedTarget = target;
  // The goal distance of camera from target
  camera.radius = 10;
  // The goal height of camera above local origin (centre) of target
  camera.heightOffset = 10;
  // The goal rotation of camera around local origin (centre) of target in x y plane
  camera.rotationOffset = 0;
  // Acceleration of camera in moving from current to goal position
  camera.cameraAcceleration = 0.005;
  // The speed at which acceleration is halted
  camera.maxCameraSpeed = 10;
  return camera;
}
*/

/*
var camera = UniversalCamera(scene);
camera.setTarget(BABYLON.Vector3.Zero());
camera.attachControl(canvas, true);
*/
var lockMouse = function(){};
const spectatorCamera = function(scene, canvas){
  var camera = new BABYLON.UniversalCamera("SpectatorCamera", new BABYLON.Vector3(0, 0, -10), scene);
  camera.keysUp.push(87);
  camera.keysDown.push(83);
  camera.keysLeft.push(65);
  camera.keysRight.push(68);
  var isLocked = false;
  scene.onPointerDown = function(evt){
    if(!isLocked){
      canvas.requestPointerLock = canvas.requestPointerLock || canvas.msRequestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
      if(canvas.requestPointerLock){
        canvas.requestPointerLock();
      }
    }
    //continue with shooting requests or whatever :P
    if(evt === 0){
      alert("Not yet!", "You can't place blocks yet!");
    }else if(evt === 2){
      alert("Not yet!", "You can't destroy blocks yet!");
    }else if(evt === 1){
      alert("Not yet!", "There's no hotbar!");
    }
  };
  var pointerlockchange = function(){
    var controlEnabled = document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement || document.pointerLockElement || null;
    // If the user is already locked
    if(!controlEnabled){
      camera.detachControl(canvas);
      isLocked = false;
    }else{
      camera.attachControl(canvas);
      isLocked = true;
    }
  };
  document.addEventListener("pointerlockchange", pointerlockchange, false);
  document.addEventListener("mspointerlockchange", pointerlockchange, false);
  document.addEventListener("mozpointerlockchange", pointerlockchange, false);
  document.addEventListener("webkitpointerlockchange", pointerlockchange, false);
  lockMouse = function(){
    camera.attachControl(canvas);
    //isLocked = true;
    //canvas.requestPointerLock();
  };
  return camera;
}
const normalCamera = function(scene, canvas){
  var camera = new BABYLON.UniversalCamera("NormalCamera", new BABYLON.Vector3(0, 0, -10), scene);
  camera.keysUp.push(87);
  camera.keysDown.push(83);
  camera.keysLeft.push(65);
  camera.keysRight.push(68);
  var isLocked = false;
  scene.onPointerDown = function(evt){
    if(!isLocked){
      canvas.requestPointerLock = canvas.requestPointerLock || canvas.msRequestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
      if(canvas.requestPointerLock){
        canvas.requestPointerLock();
      }
    }
    //continue with shooting requests or whatever :P
    if(evt === 0){
      //left mouse click
    }else if(evt === 2){
      //right mouse click
    }else if(evt === 1){
      //mouse wheel click (not scrolling)
    }
  };
  var pointerlockchange = function(){
    var controlEnabled = document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement || document.pointerLockElement || null;
    // If the user is already locked
    if(!controlEnabled){
      camera.detachControl(canvas);
      isLocked = false;
    }else{
      camera.attachControl(canvas);
      isLocked = true;
    }
  };
  document.addEventListener("pointerlockchange", pointerlockchange, false);
  document.addEventListener("mspointerlockchange", pointerlockchange, false);
  document.addEventListener("mozpointerlockchange", pointerlockchange, false);
  document.addEventListener("webkitpointerlockchange", pointerlockchange, false);
  return camera;
}
/*
var camera = AnaglyphUniversalCamera(scene);
camera.setTarget(BABYLON.Vector3.Zero());
camera.attachControl(canvas, true);
*/

/*
const AnaglyphUniversalCamera = function(scene){
  var camera = new BABYLON.AnaglyphUniversalCamera("AnaglyphUniversalCamera", new BABYLON.Vector3(0, 1, -15), 0.033, scene);
  return camera;
}
*/

//scene.activeCamera.panningSensibility = 1;
/*
var camera = AnaglyphArcRotateCamera(scene);
camera.attachControl(canvas, true);
*/

/*
const AnaglyphArcRotateCamera = function(scene){
  var camera = new BABYLON.AnaglyphArcRotateCamera("AnaglyphArcRotateCamera", -Math.PI/2, Math.PI/4, 20, new BABYLON.Vector3.Zero(), 0.033, scene);
  return camera;
}
*/

/*
var camera = DeviceOrientationCamera(scene);
camera.attachControl(canvas, true);
*/

/*
const DeviceOrientationCamera = function(scene){
  var camera = new BABYLON.DeviceOrientationCamera("DeviceOrientationCamera", new BABYLON.Vector3(0, 0, 0), scene);
  // Sets the sensitivity of the camera to movement and rotation
  camera.angularSensibility = 10;
  camera.moveSensibility = 10;
  // Attach the camera to the canvas
  return camera;
}
*/

/*
var camera = FlyCamera(scene);
camera.attachControl(canvas, true);
*/

/*
const FlyCamera = function(scene){
  var camera = new BABYLON.FlyCamera("FlyCamera", new BABYLON.Vector3(0, 5, -10), scene);
  // Airplane like rotation, with faster roll correction and banked-turns.
  // Default is 100. A higher number means slower correction.
  camera.rollCorrect = 10;
  // Default is false.
  camera.bankedTurn = true;
  // Defaults to 90° in radians in how far banking will roll the camera.
  camera.bankedTurnLimit = Math.PI / 2;
  // How much of the Yawing (turning) will affect the Rolling (banked-turn.)
  // Less than 1 will reduce the Rolling, and more than 1 will increase it.
  camera.bankedTurnMultiplier = 1;
  // This attaches the camera to the canvas
  return camera;
}
*/