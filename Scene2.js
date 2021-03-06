class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {
    // Background parallax
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
      0,
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
    //-.-'

    // Plataformas
    // Plataforma principal
    this.ground = this.add.tileSprite(
      200,
      config.height + 80,
      config.width,
      config.height,
      "groundTile"
    );
    //-.-'
    // personagens, itens, ..
    this.skeleton1 = this.add.sprite(
      config.width / 2 - 50,
      config.height / 1.2,
      "skeleton"
    );
    this.skeleton1.play("skeleton_anim");

    // Adiciona colisão para limites da cena
    this.physics.world.setBoundsCollision();

    // Adicionando Física
    // grupo enemies
    this.enemies = this.physics.add.group();
    this.enemies.add(this.skeleton1);

    // grupo platforms
    this.platforms = this.physics.add.group();

    this.skeleton1.setInteractive();

    this.player = this.physics.add.sprite(
      config.width / 6,
      config.height - 43,
      "warrior"
    );
    this.player.play("run");

    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);
  }

  update() {
    this.background1.tilePositionX += 0.1;
    this.background2.tilePositionX += 0.2;
    this.background3.tilePositionX += 0.3;
    this.background4.tilePositionX += 0.4;
    this.background5.tilePositionX += 0.7;

    this.ground.tilePositionX += 1;

    this.moveSkeleton(this.skeleton1, 0.7);

    this.movePlayerManager();
  }

  movePlayerManager() {
    this.player.setVelocity(0);

    if (this.cursorKeys.right.isDown) {
      this.player.setVelocityX(gameSettings.playerSpeed);
    } else if (this.cursorKeys.left.isDown) {
      this.player.setVelocityX(-gameSettings.playerSpeed);
    }
  }

  moveSkeleton(skeleton, speed) {
    skeleton.x -= speed;
    if (skeleton.x < 1) {
      this.resetSkeletonPos(skeleton);
    }
  }

  resetSkeletonPos(skeleton) {
    skeleton.x = 401;
  }
}
