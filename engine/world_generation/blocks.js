const defindBlocks = function(scene){
  const materials = defineMaterials(scene);
  var blocks = [
    {
      "worldGenerationBlock": null,
      "structureBlock": null,
      "stoneBlock": null,
      "glassBlock": null,
      "leavesBlock": null,
      "worldBottomBlock": null,//same as bedrock
      "dirtBlock": null,
      "grassBlock": null,
      "mushroomBlock": null,
      "bushBlock": null,
      "waterBlock": null,
      "woodLogBlock": null
    }
  ];
  blocks = blocks[0];
  /*const FadeInAndOut = function(scene, mesh){
    scene.registerBeforeRender(function(){
      if(BABYLON.Vector3.Distance(scene.activeCamera.position, mesh.position) > 100){
        mesh.visibility = 0;
      }else{
        mesh.visibility = 1;
      }
     });
  };*/

  //.dispose()

  const checkForBlocks = function(mesh){
    scene.registerBeforeRender(function(){
      let meshPosition = mesh.position;
      if(scene.isThereMeshAtPosition(meshPosition["x"] + 1, meshPosition["y"], meshPosition["z"]) && scene.isThereMeshAtPosition(meshPosition["x"], meshPosition["y"] + 1, meshPosition["z"]) && scene.isThereMeshAtPosition(meshPosition["x"], meshPosition["y"], meshPosition["z"] + 1) && scene.isThereMeshAtPosition(meshPosition["x"] - 1, meshPosition["y"], meshPosition["z"]) && scene.isThereMeshAtPosition(meshPosition["x"], meshPosition["y"] - 1, meshPosition["z"]) && scene.isThereMeshAtPosition(meshPosition["x"], meshPosition["y"], meshPosition["z"] - 1)){
        mesh.visibility = 0;
      }else{
        mesh.visibility = 1;
      }
    });
  };

  blocks.worldGenerationBlock = function(){
    var block = standerdBlock(scene);
    block.material = materials.genBlock;
    block.updateFacetData();
    checkForBlocks(block);
    return block;
  };

  blocks.structureBlock = function(){
    var block = standerdBlock(scene);
    block.material = materials.struBlock;
    block.updateFacetData();
    checkForBlocks(block);
    return block;
  };

  blocks.worldBottomBlock = function(){
    var block = standerdBlock(scene);
    block.material = materials.worldBottom;
    block.updateFacetData();
    checkForBlocks(block);
    return block;
  };

  blocks.glassBlock = function(){
    var block = standerdBlock(scene);
    block.material = materials.glass;
    block.updateFacetData();
    checkForBlocks(block);
    return block;
  };

  blocks.leavesBlock = function(){
    var block = standerdBlock(scene);
    block.material = materials.leaves;
    block.updateFacetData();
    checkForBlocks(block);
    return block;
  };

  blocks.stoneBlock = function(){
    var block = standerdBlock(scene);
    block.material = materials.stone;
    block.updateFacetData();
    checkForBlocks(block);
    return block;
  };

  blocks.dirtBlock = function(){
    var block = standerdBlock(scene);
    block.material = materials.dirt;
    block.updateFacetData();
    checkForBlocks(block);
    return block;
  };

  blocks.grassBlock = function(){
    var block = multiSidesBlock(scene);
    block.material = materials.grass;
    block.updateFacetData();
    checkForBlocks(block);
    return block;
  };

  blocks.mushroomBlock = function(){
    var block = standerdBlock(scene);
    block.material = materials.mushroom;
    block.updateFacetData();
    checkForBlocks(block);
    return block;
  };

  blocks.bushBlock = function(){
    var block = standerdBlock(scene);
    block.material = materials.bush;
    block.updateFacetData();
    checkForBlocks(block);
    return block;
  };

  blocks.woodLogBlock = function(){
    var block = multiSidesBlock(scene);
    block.material = materials.woodLog;
    block.updateFacetData();
    checkForBlocks(block);
    return block;
  };

  blocks.waterBlock = function(){
    var block = standerdBlock(scene);
    block.material = materials.water;
    block.updateFacetData();
    checkForBlocks(block);
    return block;
  };

  return blocks;
};