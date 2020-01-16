class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {
    this.background1 = this.add.tileSprite(
      0,
      0,
      config.width,
      config.height,
      "background1"
    );
    this.background1.setOrigin(0, 0);

    this.background2 = this.add.tileSprite(
      0,
      0,
      config.width,
      config.height,
      "background2"
    );
    this.background2.setOrigin(0, 0);

    this.skeleton1 = this.add.image(
      config.width / 2,
      config.height / 1.5,
      "skeleton"
    );
    this.skeleton1.setScale(2);

    this.skeleton2 = this.add.image(
      config.width / 2,
      config.height / 2,
      "skeleton"
    );
    this.skeleton2.setScale(3);

    this.skeleton3 = this.add.image(
      config.width / 2,
      config.height / 3,
      "skeleton"
    );
    this.skeleton3.setScale(2);

    this.add.text(20, 20, "Playing", {
      font: "25px Arial",
      fill: "yellow"
    });
  }

  moveSkeleton(skeleton, speed) {
    skeleton.x += speed;
    if (skeleton.x > config.width) {
      this.resetSkeletonPos(skeleton);
    }
  }

  resetSkeletonPos(skeleton) {
    skeleton.x = 0;
    var randomY = Phaser.Math.Between(0, config.height);
    skeleton.y = randomY;
  }

  update() {
    this.moveSkeleton(this.skeleton1, 1.6);
    this.moveSkeleton(this.skeleton2, 1.2);
    this.moveSkeleton(this.skeleton3, 1.6);

    this.background1.tilePositionX -= 0.5;
    this.background2.tilePositionX -= 0.2;
  }
}
