export class Mob extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "mob");
    scene.add.existing(this);
    scene.physics.add.existing(this);

    // Animation du mob
    scene.anims.create({
      key: "mob-walk",
      frames: scene.anims.generateFrameNumbers("mob", { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });
  }

  update(player) {
    const dx = player.x - this.x;
    const dy = player.y - this.y;
    const angle = Math.atan2(dy, dx);
    this.setVelocityX(50 * Math.cos(angle));
    this.setVelocityY(50 * Math.sin(angle));
    this.setScale(-1, 1);
    this.anims.play("mob-walk", true);
  }
}
