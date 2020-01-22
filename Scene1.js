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
    this.load.image("groundTile", "assets/ground.png");
    this.load.image("star", "assets/star.png");

    this.load.spritesheet("player", "assets/adventurerSheet.png", {
      frameWidth: 50,
      frameHeight: 37
    });

    this.load.spritesheet("skeleton", "assets/skeleton.png", {
      frameWidth: 22,
      frameHeight: 33
    });
  }

  create() {
    this.add.text(20, 20, "Loading Game...");
    this.scene.start("playGame");

    this.anims.create({
      key: "skeleton_anim",
      frames: this.anims.generateFrameNumbers("skeleton"),
      frameRate: 20,
      repeat: -1
    });

    //  Our player animations, running right, running left - todo: jumping.

    this.anims.create({
      key: "run",
      frames: this.anims.generateFrameNumbers("player", {
        start: 8,
        end: 13
      }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: "jump",
      frames: this.anims.generateFrameNumbers("player", {
        start: 14,
        end: 23
      }),
      frameRate: 20,
      repeat: -1
    });
  }
}
