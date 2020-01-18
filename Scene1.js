class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("background1", "assets/plx/plx-1.png");
    this.load.image("background2", "assets/plx/plx-2.png");
    this.load.image("background3", "assets/plx/plx-3.png");
    this.load.image("background4", "assets/plx/plx-4.png");
    this.load.image("background5", "assets/plx/plx-5.png");

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
