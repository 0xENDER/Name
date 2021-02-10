const chunkBottom = function(){
  //
  //
};
const generatChunk = function(scene, blocks, X, Z){
  //
  //A chunk is a 12*12 area
  var Y = 0, seed = scene.seed;//Max Y value is 128
  //chunk bottom
  var Block = null;
  for(var tX = X; tX < 12; tX++){
    for(var tZ = Z; tZ < 12; tZ++){
      for(var tY = 0; tY <= 128; tY++){
        if(tY == 0){
          blocks.worldBottomBlock().position = new BABYLON.Vector3(tX, tY, tZ);
        }else if(tY <= 64){
          blocks.worldGenerationBlock().position = new BABYLON.Vector3(tX, tY, tZ);
        }else if(tY == 128){
          blocks.worldBottomBlock().position = new BABYLON.Vector3(tX, tY, tZ);
        }
      }
    }
  }
  //Needs "noise(x, [y], [z])"
}