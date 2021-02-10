const SceneOptimizer = function(scene){
  var options = new BABYLON.SceneOptimizerOptions(60, 2000);
  options.addOptimization(new BABYLON.HardwareScalingOptimization(0, 1));
  //options.targetFrameRate = 60;
  //options.trackerDuration = 2000;
  //options.HighDegradationAllowed(60);
  // Optimizer
  var optimizer = new BABYLON.SceneOptimizer(scene, options);
  return optimizer;
};