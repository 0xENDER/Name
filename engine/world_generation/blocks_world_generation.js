const generateBlocksTerrain = function(scene){//generate a terrain out of the "genBlock"
  const blocks = defindBlocks(scene);

  var box0 = blocks.airBlock();
  box0.position = new BABYLON.Vector3(-3, 0, 0);

  var box1 = blocks.worldGenerationBlock();
  box1.position = new BABYLON.Vector3(0, 0, 0);

  var box2 = blocks.structureBlock();
  box2.position = new BABYLON.Vector3(3, 0, 0);

  var box3 = blocks.worldBottomBlock();
  box3.position = new BABYLON.Vector3(6, 0, 0);

  var box4 = blocks.glassBlock();
  box4.position = new BABYLON.Vector3(9, 0, 0);

  var box5 = blocks.leavesBlock();
  box5.position = new BABYLON.Vector3(12, 0, 0);

  var box6 = blocks.stoneBlock();
  box6.position = new BABYLON.Vector3(15, 0, 0);

  var box7 = blocks.dirtBlock();
  box7.position = new BABYLON.Vector3(18, 0, 0);

  var box8 = blocks.grassBlock();
  box8.position = new BABYLON.Vector3(21, 0, 0);

  var box9 = blocks.mushroomBlock();
  box9.position = new BABYLON.Vector3(24, 0, 0);

  var box10 = blocks.bushBlock();
  box10.position = new BABYLON.Vector3(27, 0, 0);

  var box11 = blocks.woodLogBlock();
  box11.position = new BABYLON.Vector3(30, 0, 0);

  var box12 = blocks.waterBlock();
  box12.position = new BABYLON.Vector3(33, 0, 0);

  return scene;
};

//add lighting to the scene in world_lighting.js