class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("background", "./phaser/img/b.png");
    this.load.spritesheet("naruto", "./img/narutess.png", {
      frameWidth: 60,
      frameHeight: 60,
    });
    this.load.spritesheet("mob", "./img/mobs.png", {
      frameWidth: 60,
      frameHeight: 60,
    });
  }

  create() {
    this.add.text(20, 20, "Loading game...");
    this.scene.start("playGame");
  }
}
