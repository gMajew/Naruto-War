class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("background", "./img/Background_naruto.png");
    this.load.image("background2", "./img/Background_naruto.png");
    this.load.image("background3", "./img/Background_naruto.png");
    this.load.spritesheet("naruto", "./img/narutess.png", {
      frameWidth: 60,
      frameHeight: 60,
    });
    this.load.spritesheet("mob", "./img/mobs.png", {
      frameWidth: 60,
      frameHeight: 60,
    });
    this.load.image("spell", "./img/spell.png");
  }

  create() {
    this.add.text(20, 20, "Loading game...");
    this.scene.start("playGame");
  }
}
