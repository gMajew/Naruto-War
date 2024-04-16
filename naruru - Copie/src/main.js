/** @type {import("../typings/phaser.js")} */

import { LoadScene } from "./scenes/LoadScene.js";
import { MenuScene } from "./scenes/MenuScene.js";
import { PlayScene } from "./scenes/PlayScene.js";

var config = {
  width: 1800,
  height: 900,
  physics: {
    default: "arcade",
    aracde: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  backgroundcolor: 0x000000,
  scene: [LoadScene, MenuScene, PlayScene],
  pixelArt: true,
};

var game = new Phaser.Game(config);
