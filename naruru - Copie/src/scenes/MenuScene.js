import { CST } from "../CST.js";

export class MenuScene extends Phaser.Scene {
  constructor() {
    super({
      key: CST.SCENES.MENU,
    });
  }
  init(data) {
    console.log(data);
    console.log("I GOT IT");
  }
  create() {
    this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height * 0.27,
        "logo"
      )
      .setDepth(1);
    this.add.image(0, 0, "titre").setOrigin(0).setDepth(0);

    let playButton = this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height / 2,
        "play"
      )
      .setDepth(1);

    this.sound.play("music", {
      loop: true,
    });

    playButton.setInteractive();

    playButton.on("pointerup", () => {
      this.scene.start(CST.SCENES.PLAY);
    });
  }
}
