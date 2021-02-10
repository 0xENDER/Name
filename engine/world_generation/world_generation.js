const createWorld = function(seed = Math.floor(Math.random() * 10000000)){
  var scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color3(0.5, 0.8, 0.9);
  scene.seed = scene;
  return scene;
};

const generateAWorld = function(scene, seed){
  scene = setBiomes(scene);
  scene = generateTerrain(scene);
  scene = replaceTerrainBlocks(scene);
  scene = addTerrainDetails(scene);
  scene = generateCaves(scene);
  scene = addStructureBlocks(scene);
  scene = replaceStructerBlocks(scene);
  scene = generateOres(scene);
  scene = generateMobs(scene);
  return scene;
};

const setBiomes = function(scene){
  //
  return scene;
};

const generateTerrain = function(scene){//generate a terrain out of the "genBlock"
  const blocks = defindBlocks(scene);
  //var box = blocks.worldGenerationBlock();
  //box.position = new BABYLON.Vector3(0, 0, 0);
  generatChunk(scene, blocks, 0, 0);//scene, X, Z (X, Y, Z)
  return scene;
};

const replaceTerrainBlocks = function(scene){//replace "genBlock"-s with grass, dirt, ...
  const blocks = defindBlocks(scene);
  //
  return scene;
};

const addTerrainDetails = function(scene){//replace "struBlock"-s with their structure
  //
  return scene;
};

const generateCaves = function(scene){//replace "struBlock"-s with their structure
  //
  return scene;
};

const addStructureBlocks = function(scene){//generate "struBlock"-s in the terrain (NOTE: add an ID to structure blocks in order to know what structure to generate)
  //
  return scene;
};

const replaceStructerBlocks = function(scene){//replace "struBlock"-s with their structure
  //
  return scene;
};

const generateOres = function(scene){//replace "struBlock"-s with their structure
  //
  return scene;
};

const generateMobs = function(scene){//generate mobs in the world
  //
  return scene;
};

//add lighting to the scene in world_lighting.js