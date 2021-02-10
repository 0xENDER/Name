//light.setEnabled(true);
/*
var light = PointLight(scene, new BABYLON.Color3(1, 0, 0));
*/
const PointLight = function(scene, color){
  var light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(0, 10, 0), scene);
  light.diffuse = color;
  light.intensity = 0.9;
  light.range = 100;
  return light;
}
/*
var light = SpotLight(scene, new BABYLON.Color3(1, 0, 0));
*/
const SpotLight = function(scene, color){
  var light = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(0, 10, 0), new BABYLON.Vector3(0, -1, 0), BABYLON.Tools.ToRadians(45), 0.1, scene);
  light.diffuse = color;
  light.intensity = 1;
  light.range = 100;
  return light;
}
/*
var light = DirectionalLight(scene, new BABYLON.Color3(1, 0, 0));
*/
const DirectionalLight = function(scene, color){
  var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
  light.diffuse = color;
  light.intensity = 1;
  light.range = 100;
  return light;
}
/*
var light = HemisphericLight(scene, new BABYLON.Color3(1, 0, 0));
*/
const HemisphericLight = function(scene, color){
  //var light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), scene);
  //light.diffuse = color;
  //light.intensity = 1;
  //light.range = 100;
  var light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, -1, 0), scene);
  light.intensity = 0.4;
  light.groundColor = new BABYLON.Color3(1,1,1);
  light.specular = color;
  return light;
}
