var showLoadingScreen;
$(document).ready(function(){
  $("#settings").click(function(){
    //alert("Coming soon!", "You can't access the settings menu yet!");
    showMenu("mainMenu", "settingsMenu");
  });
  $("#signIn").click(function(){
    alert("Coming soon!", "You can't sign in yet!");
  });
  $("#exit").click(function(){
    alert("Exiting the game!", "Are you sure that you want to exit the game?", "YesOrNo", function(){
      window.close();
    }, function(){
      //No
    });
  });
  $("#multiplayer").click(function(){
    alert("Coming soon!", "You can't access multiplayer mode yet!");
  });
  $("#singleplayer").click(function(){
    //alert("Coming soon!", "You can't access singleplayer mode yet!");
    showMenu("mainMenu", "singleplayerWorldsMenu");
  });
  $("#settingsBackButton").click(function(){
    //alert("Coming soon!", "You can't access the settings menu yet!");
    showMenu("settingsMenu", "mainMenu");
  });
  $("#singleplayerWorldsBackButton").click(function(){
    //alert("Coming soon!", "You can't access the settings menu yet!");
    showMenu("singleplayerWorldsMenu", "mainMenu");
  });
  showLoadingScreen = function(){
    showMenu("singleplayerWorldsMenu", "loadingMenu");
  }
  $("#newWorld").click(function(){
    alert("Coming soon!", "You can't create new worlds yet!");
    //
  });
});