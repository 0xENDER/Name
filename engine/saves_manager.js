var objectUrl;
const doDownload = function(filename, scene){
  if(objectUrl) {
    window.URL.revokeObjectURL(objectUrl);
  }

  var serializedScene = BABYLON.SceneSerializer.Serialize(scene);

  var strScene = JSON.stringify(serializedScene);

  if(filename.toLowerCase().lastIndexOf(".babylon") !== filename.length - 8 || filename.length < 9){
    filename += ".babylon";
  }

  var blob = new Blob([ strScene ], { type : "octet/stream" });

  // turn blob into an object URL; saved as a member, so can be cleaned out later
  objectUrl = (window.webkitURL || window.URL).createObjectURL(blob);

    var link = window.document.createElement('a');
  link.href = objectUrl;
  link.download = filename;
  var click = document.createEvent("MouseEvents");
  click.initEvent("click", true, false);
  link.dispatchEvent(click);
}