import { CST } from "../CST.js";

export class LoadScene extends Phaser.Scene {
  constructor() {
    super({
      key: CST.SCENES.LOAD,
    });
  }
  init() {}

  preload() {
    this.load.image("titre", "./dist/assets/backs.jpg");
    this.load.image("logo", "./dist/assets/naru.png");
    this.load.image("play", "./dist/assets/playbutton.png");

    this.load.audio("music", "./dist/assets/ost.mp3");

    let load = this.add.graphics({
      fillStyle: {
        color: 0xffffff,
      },
    });
    this.load.image("background", "./dist/assets/Background_naruto.png");
    this.load.spritesheet("naruto", "./dist/assets/na.png", {
      frameWidth: 60,
      frameHeight: 60,
    });
    this.load.spritesheet("mob", "./dist/assets/mobs.png", {
      frameWidth: 60,
      frameHeight: 60,
    });
    this.load.image("spell", "./dist/assets/spell.png");

    this.load.on("progress", (percent) => {
      load.fillRect(
        0,
        this.game.renderer.height / 2,
        this.game.renderer.width * percent,
        50
      );
      this.load.on("complete", () => {});
    });
  }

  create() {
    this.scene.start(CST.SCENES.MENU, "hello");
  }
}
