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

    this.background3 = this.add.tileSprite(
      0,
      0,
      config.width,
      config.height,
      "background3"
    );
    this.background3.setOrigin(0, 0);

    this.background4 = this.add.tileSprite(
      0,
      0,
      config.width,
      config.height,
      "background4"
    );
    this.background4.setOrigin(0, 0);

    this.background5 = this.add.tileSprite(
      0,
      0,
      config.width,
      config.height,
      "background5"
    );
    this.background5.setOrigin(0, 0);
  }

  update() {
    this.background1.tilePositionX += 0.1;
    this.background2.tilePositionX += 0.2;
    this.background3.tilePositionX += 0.3;
    this.background4.tilePositionX += 0.4;
    this.background5.tilePositionX += 0.7;
  }
}
