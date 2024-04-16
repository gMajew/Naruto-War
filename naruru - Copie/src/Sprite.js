export class Naruto extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "naruto");
    scene.add.existing(this);
    scene.physics.add.existing(this);

    // Animations de Naruto
    scene.anims.create({
      key: "left",
      frames: scene.anims.generateFrameNumbers("naruto", { start: 0, end: 6 }),
      frameRate: 10,
      repeat: -1,
    });
    scene.anims.create({
      key: "right",
      frames: scene.anims.generateFrameNumbers("naruto", { start: 0, end: 6 }),
      frameRate: 10,
      repeat: -1,
    });
    scene.anims.create({
      key: "down",
      frames: scene.anims.generateFrameNumbers("naruto", { start: 0, end: 6 }),
      frameRate: 10,
      repeat: -1,
    });
    scene.anims.create({
      key: "up",
      frames: scene.anims.generateFrameNumbers("naruto", { start: 0, end: 6 }),
      frameRate: 10,
      repeat: -1,
    });
  }

  update(cursors) {
    if (cursors.left.isDown) {
      this.setVelocityX(-160);
      this.setScale(-1, 1);
      this.anims.play("left", true);
    } else if (cursors.right.isDown) {
      this.setVelocityX(160);
      this.setScale(1, 1);
      this.anims.play("right", true);
    } else if (cursors.down.isDown) {
      this.setVelocityY(160);
      this.setScale(1, 1);
      this.anims.play("down", true);
    } else if (cursors.up.isDown) {
      this.setVelocityY(-160);
      this.setScale(-1, 1);
      this.anims.play("up", true);
    } else {
      this.setVelocityX(0);
      this.setVelocityY(0);
      this.anims.play("idle", true);
    }
  }
}
