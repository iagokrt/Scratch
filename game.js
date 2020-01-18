var config = {
  width: 600,
  height: 248,
  backgroundColor: "7159c1",
  scene: [Scene1, Scene2],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  }
};

window.onload = function() {
  var game = new Phaser.Game(config);
};
