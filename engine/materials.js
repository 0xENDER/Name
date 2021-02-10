const standerdBlock = function(scene){
  return BABYLON.Mesh.CreateBox("Box", 1, scene);
};
const multiSidesBlock = function(scene){
  var faceUV = new Array(6);
  for(var i = 0; i < 6; i++){
    faceUV[i] = new BABYLON.Vector4(i / 6, 0, (i + 1) / 6, 1);
  }
  return BABYLON.MeshBuilder.CreateBox("Box", { faceUV: faceUV, wrap: true }, scene);
};
const defineMaterials = function(scene){
  var materials = [
    {
      "genBlock": new BABYLON.StandardMaterial("genBlock", scene),
      "struBlock": new BABYLON.StandardMaterial("struBlock", scene),
      "stone": new BABYLON.StandardMaterial("stone", scene),
      "glass": new BABYLON.StandardMaterial("glass", scene),
      "leaves": new BABYLON.StandardMaterial("leaves", scene),
      "worldBottom": new BABYLON.StandardMaterial("worldBottom", scene),//same as bedrock
      "dirt": new BABYLON.StandardMaterial("dirt", scene),
      "grass": new BABYLON.StandardMaterial("grass", scene),
      "mushroom": new BABYLON.StandardMaterial("mushroom", scene),
      "bush": new BABYLON.StandardMaterial("bush", scene),
      "water": new BABYLON.StandardMaterial("water", scene),
      "woodLog": new BABYLON.StandardMaterial("woodLog", scene)
    }
  ];
  //
  //materials.name.diffuseColor = new BABYLON.Color3(0, 0, 1);
  //materials.name.emissiveColor = new BABYLON.Color3(1, 0, 0);
  //materials.name.specularColor = new BABYLON.Color4(0.2, 0.2, 0.2, 0.01);
  //materials.name.alpha = 1;//use it to create a class material
  //materials.name.maxSimultaneousLights = 4;
  //materials.name.diffuseTexture = new BABYLON.Texture("./textures/block/stone.png", scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
  //
  materials = materials[0];
  //[START] World generation blocks
  materials.genBlock.diffuseColor = new BABYLON.Color3(0, 0, 1);
  materials.genBlock.disableLightning = true;
  //
  materials.struBlock.diffuseColor = new BABYLON.Color3(1, 0, 0);
  materials.struBlock.disableLightning = true;
  //
  materials.worldBottom.diffuseColor = new BABYLON.Color3(0, 1, 0);
  materials.worldBottom.disableLightning = true;
  //[END] World generation blocks


  //[START] Stone block
  materials.stone.specularColor = new BABYLON.Color4(0.2, 0.2, 0.2, 0.01);
  materials.stone.diffuseTexture = new BABYLON.Texture("./textures/block/stone.png", scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
  //[END] Stone block

  //[START] Glass block
  materials.glass.specularColor = new BABYLON.Color4(0.2, 0.2, 0.2, 0.01);
  materials.glass.useAlphaFromDiffuseTexture = true;
  materials.glass.diffuseTexture = new BABYLON.Texture("./textures/block/glass.png", scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
  materials.glass.opacityTexture = new BABYLON.Texture("./textures/block/glass.png", scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
  //[END] Glass block

  //[START] Leaves block
  materials.leaves.specularColor = new BABYLON.Color4(0.2, 0.2, 0.2, 0.01);
  materials.leaves.useAlphaFromDiffuseTexture = true;
  materials.leaves.diffuseTexture = new BABYLON.Texture("./textures/block/leaves_opaque.png", scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
  materials.leaves.opacityTexture = new BABYLON.Texture("./textures/block/leaves_opaque.png", scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
  //[END] Leaves block

  //[START] Dirt block
  materials.dirt.specularColor = new BABYLON.Color4(0.2, 0.2, 0.2, 0.01);
  materials.dirt.diffuseTexture = new BABYLON.Texture("./textures/block/dirt.png", scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
  //[END] Dirt block

  //[START] Grass block
  materials.grass.specularColor = new BABYLON.Color4(0.2, 0.2, 0.2, 0.01);
  materials.grass.diffuseTexture = new BABYLON.Texture("./textures/block/grass_block.png", scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
  //[END] Grass block

  //[START] Mushroom block
  materials.mushroom.specularColor = new BABYLON.Color4(0.2, 0.2, 0.2, 0.01);
  materials.mushroom.diffuseTexture = new BABYLON.Texture("./textures/block/brown_mushroom.png", scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
  //[END] Mushroom block

  //[START] Bush block
  materials.bush.specularColor = new BABYLON.Color4(0.2, 0.2, 0.2, 0.01);
  materials.bush.diffuseTexture = new BABYLON.Texture("./textures/block/bush.png", scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
  //[END] Bush block

  //[START] Water block
  materials.water.specularColor = new BABYLON.Color4(0.2, 0.2, 0.2, 0.01);
  materials.water.alpha = 0.8;
  materials.water.diffuseTexture = new BABYLON.Texture("./textures/block/water.png", scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
  //[END] Water block

  //[START] Wood log block
  materials.woodLog.specularColor = new BABYLON.Color4(0.2, 0.2, 0.2, 0.01);
  materials.woodLog.diffuseTexture = new BABYLON.Texture("./textures/block/wood_log.png", scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
  //[END] Wood log block


  /*
  box1.enableEdgesRendering();	
	box1.edgesWidth = 2.0;
	box1.edgesColor = new BABYLON.Color4(.6, .6, .6, 1);
  */

  return materials;
};