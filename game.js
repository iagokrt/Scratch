var gameSettings = {
  playerSpeed: 100
};

var config = {
  width: 400,
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

var game = new Phaser.Game(config);
