class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
    this.spellTimer = 0;
  }

  create() {
    const maxX = this.physics.world.bounds.width;
    const maxY = this.physics.world.bounds.height;
    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0, 0);
    console.log(this);
    this.player = this.physics.add.sprite(261, 261, "naruto");
    this.enn = this.physics.add.sprite(
      Math.random() * maxX,
      Math.random() * maxY,
      "mob"
    );
    this.spell = this.physics.add.sprite(0, 0, "spell");
    this.spell.visible = false;
    setTimeout(() => {
      this.enn.x = Math.random() * (this.physics.world.bounds.width - 64);
      this.enn.y = Math.random() * (this.physics.world.bounds.height - 64);
    }, 15);

    this.anims.create({
      key: "mob-walk",
      frames: this.anims.generateFrameNumbers("mob", {
        start: 0,
        end: 7,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("naruto", {
        start: 0,
        end: 6,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("naruto", {
        start: 0,
        end: 6,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers("naruto", {
        start: 0,
        end: 6,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNumbers("naruto", {
        start: 0,
        end: 6,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(this.player, this.platforms);

    this.add.text(20, 20, "Playing game", {
      font: "25px Arial",
      fill: "yellow",
    });
    this.physics.add.collider(this.player, "background");
    this.physics.add.overlap(this.spell, this.enn, () => {
      this.spell.visible = false;
      this.spell.setPosition(0, 0);
    });

    this.time.addEvent({
      delay: 2000, // Delay in milliseconds (2000 = 2 seconds)
      callback: () => {
        this.spellTimer = 0;
        this.spell.visible = true;
        this.spell.x = this.player.x;
        this.spell.y = this.player.y;
        const dx = this.enn.x - this.spell.x;
        const dy = this.enn.y - this.spell.y;
        const angle = Math.atan2(dy, dx);
        this.spell.setVelocityX(160 * Math.cos(angle));
        this.spell.setVelocityY(160 * Math);
      },
      loop: true,
    });
  }

  update() {
    const dx = this.player.x - this.enn.x;
    const dy = this.player.y - this.enn.y;
    const angle = Math.atan2(dy, dx);
    this.enn.setVelocityX(160 * Math.cos(angle));
    this.enn.setVelocityY(160 * Math.sin(angle));
    this.enn.setScale(-1, 1);
    this.enn.anims.play("mob-walk", true);

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.setScale(-1, 1);
      this.player.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.setScale(1, 1);

      this.player.anims.play("right", true);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(160);
      this.player.setScale(1, 1);

      this.player.anims.play("down", true);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-160);
      this.player.setScale(-1, 1);

      this.player.anims.play("up", true);
    } else {
      this.player.setVelocityX(0);
      this.player.setVelocityY(0);

      this.player.anims.play("idle", true);
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }
  }
}
