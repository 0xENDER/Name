//https://github.com/goldfire/howler.js#documentation
localStorage.UISoundsVolume = "";
localStorage.InGameSoundsVolume = "";
localStorage.MusicVolume = "";

if(localStorage.UISoundsVolume === null || localStorage.UISoundsVolume === undefined || localStorage.UISoundsVolume === ""){
  localStorage.UISoundsVolume = 0.6;
  localStorage.InGameSoundsVolume = 1;
  localStorage.MusicVolume = 0.3;
}
var startSound, hoverSound, alertSound, alertExitSound, menuMusic, menuOpen, menuClose;
function UpdateSounds(){
  startSound = new Howl({
    src: ['./sound/splash/Stomps_and_Claps.mp3'],//zapsplat_cartoon_pop_pull_finger_out_of_tube
    loop: false,
    volume: localStorage.UISoundsVolume
    /*onend: function(){
      console.log('Finished!');
    }*/
  });
  hoverSound = new Howl({
    src: ['./sound/UI/zapsplat_cartoon_pop_mouth.mp3'],
    loop: false,
    volume: localStorage.UISoundsVolume
  });
  ClickSound = new Howl({
    src: ['./sound/UI/zapsplat_cartoon_bubble_pop.mp3'],
    loop: false,
    volume: localStorage.UISoundsVolume,
    sprite: {
      MouseDown: [0, 60],
      MouseUp: [60, 100]
    }
  });
  alertSound = new Howl({
    src: ['./sound/UI/zapsplat_cartoon_pop_medium.mp3'],
    loop: false,
    volume: localStorage.UISoundsVolume
  });
  alertExitSound = new Howl({
    src: ['./sound/UI/zapsplat_cartoon_pop_medium_2.mp3'],
    loop: false,
    sprite: {
      cut: [100, 1000]
    },
    volume: localStorage.UISoundsVolume
  });
  menuMusic = new Howl({
    src: ['./sound/menu/Chad_Crouch_-_Organisms.mp3'],
    loop: false,
    volume: localStorage.MusicVolume,
    onend: function(){
      setTimeout(function(){
        menuMusic.play();
      }, 60000);
    }
  });
  menuOpen = new Howl({
    src: ['./sound/UI/zapsplat_cartoon_bubble_001.mp3'],
    loop: false,
    volume: localStorage.UISoundsVolume
  });
  menuClose = new Howl({
    src: ['./sound/UI/zapsplat_cartoon_bubble_002.mp3'],
    loop: false,
    volume: localStorage.UISoundsVolume
  });
  ClickSound2 = new Howl({
    src: ['./sound/UI/zapsplat_cartoon_pop_mouth_2.mp3'],
    loop: false,
    sprite: {
      cut: [10, 1000]
    },
    volume: localStorage.UISoundsVolume
  });
}
UpdateSounds();
function UpdateSoundsVolumes(UISounds, InGameSounds, Music){
  localStorage.UISoundsVolume = UISounds;
  localStorage.InGameSoundsVolume = InGameSounds;
  localStorage.MusicVolume = Music;
  UpdateSounds();
}