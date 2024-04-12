var config = {
  width: 735,
  height: 406,
  physics: {
    default: "arcade",
    aracde: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  backgroundcolor: 0x000000,
  scene: [Scene1, Scene2],
  pixelArt: true,
};

var game = new Phaser.Game(config);
