//https://forum.babylonjs.com/t/how-can-i-check-for-a-mesh-using-a-position/11035/2?u=enderadel
function isBetween( nb, min, max) {
  return nb >= min && nb <= max;
}

BABYLON.Scene.prototype.isThereMeshAtPosition = function ( x, y, z, uniformSize){
  // Half size (-/+ half size to min/max range)
  let halfUniformSize = 0.5 * (uniformSize ? uniformSize : 1); // Default 1 (0.5) (1width 1height  1depth)
  /*for(let i = 0; i < this.meshes.length; i++){
    if(this.meshes[i].position == {"x": x, "y": y, "z": z}){
      return true;
    }
  }
  return false;*/
  for(let i = 0; i < this.meshes.length; i++){
    // Mesh position
    let mP = this.meshes[i] && !this.meshes[i].isDisposed() ? this.meshes[i].position : null;
    // Check if position matches
    if( mP && isBetween(mP.x, x - halfUniformSize, x + halfUniformSize) && isBetween(mP.y, y - halfUniformSize, y + halfUniformSize) && isBetween(mP.z, z - halfUniformSize, z + halfUniformSize)){
      //return this.meshes[i];
      return true;
    }
  }
  return false;
};
//scene.isThereMeshAtPosition(0, 1, 0)
//scene.isThereMeshAtPosition(0, 1, 0, 2) // with a "non-standard" size of 2, rather than default 1.