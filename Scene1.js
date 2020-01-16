class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("background", "assets/sky.png");
    this.load.image("background1", "assets/bg-1.png");
    this.load.image("background2", "assets/bg-2.png");
    this.load.image("skeleton", "assets/skeleton.png");
    this.load.spritesheet("warrior", "assets/warrior.png", {
      frameWidth: 50,
      frameHeight: 37
    });
  }

  create() {
    this.add.text(20, 20, "Loading Game...");
    this.scene.start("playGame");
  }
}
