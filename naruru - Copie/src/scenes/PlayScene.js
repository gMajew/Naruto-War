import { CST } from "../CST.js";

export class PlayScene extends Phaser.Scene {
  constructor() {
    super({ key: CST.SCENES.PLAY });
    this.spellTimer = 0;
    this.enemies = [];
    this.enemiesCount = 10;
    this.currentWave = 1;
    this.maxWaves = 3;
    this.playerHitCount = 0;
  }

  create() {
    const maxX = this.physics.world.bounds.width;
    const maxY = this.physics.world.bounds.height;
    this.background = this.add.image(0, 0, "background");

    this.background.setScale(
      1920 / this.background.width,
      1080 / this.background.height
    );

    this.background.setOrigin(0.5, 0.5);
    this.background.setPosition(
      this.cameras.main.centerX,
      this.cameras.main.centerY
    );

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

    this.physics.add.collider(this.player, "background");
    this.physics.add.overlap(this.spell, this.enn, () => {
      this.spell.visible = false;
      this.spell.setPosition(0, 0);
    });

    this.time.addEvent({
      delay: 2000,
      callback: () => {
        this.spellTimer = 0;
        this.spell.visible = true;
        this.spell.x = this.player.x;
        this.spell.y = this.player.y;
        const randomEnemy = Phaser.Utils.Array.GetRandom(this.enemies);
        if (randomEnemy) {
          const dx = randomEnemy.x - this.spell.x;
          const dy = randomEnemy.y - this.spell.y;
          const angle = Math.atan2(dy, dx);
          this.spell.setVelocityX(160 * Math.cos(angle));
          this.spell.setVelocityY(160 * Math.sin(angle));
        }
      },
      loop: true,
    });
    this.physics.add.overlap(this.spell, this.enemies, (spell, enemy) => {
      enemy.hitCount = (enemy.hitCount || 0) + 1;
      if (enemy.hitCount >= 2) {
        enemy.destroy();
        this.enemies = this.enemies.filter((e) => e !== enemy);
      }

      this.physics.add.overlap(this.player, this.enemies, (player, enemy) => {
        this.playerHitCount++;
        if (this.playerHitCount >= 5) {
          console.log("Game Over - Naruto a été touché 5 fois par les mobs.");
        }

        enemy.destroy();
        this.enemies = this.enemies.filter((e) => e !== enemy);
      });

      spell.visible = false;
      spell.setPosition(0, 0);
    });

    this.time.addEvent({
      delay: 16,
      callback: this.updateEnemies,
      callbackScope: this,
      loop: true,
    });
    for (let i = this.enemies.length; i < this.enemiesCount; i++) {
      this.createEnemy();
    }
    this.time.addEvent({
      delay: 16,
      callback: this.updateEnemies,
      callbackScope: this,
      loop: true,
    });
    this.createWave();
    this.setupSpellEnemyCollisions();
  }
  createWave() {
    for (let i = this.enemies.length; i < this.enemiesCount; i++) {
      this.createEnemy();
    }
  }
  createEnemy() {
    const maxX = this.physics.world.bounds.width;
    const maxY = this.physics.world.bounds.height;
    const enemy = this.physics.add.sprite(
      Math.random() * maxX,
      Math.random() * maxY,
      "mob"
    );
    enemy.setCollideWorldBounds(true);
    this.enemies.push(enemy);
  }
  setupSpellEnemyCollisions() {
    this.physics.add.overlap(this.spell, this.enemies, (spell, enemy) => {
      this.playerHitCount++;
      if (this.playerHitCount >= 5) {
        console.log("Game Over - Naruto a été touché 5 fois par les mobs.");
      }

      // Cache le mob
      enemy.destroy();
      this.enemies = this.enemies.filter((e) => e !== enemy);
    });
  }

  updateEnemies() {
    if (this.enemies) {
      const playerX = this.player.x;
      const playerY = this.player.y;
      this.enemies.forEach((enemy) => {
        const dx = playerX - enemy.x;
        const dy = playerY - enemy.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);
        const speedFactor = distance / 200;
        const speed = 50 * speedFactor;
        enemy.setVelocityX(speed * Math.cos(angle));
        enemy.setVelocityY(speed * Math.sin(angle));
        enemy.setScale(-1, 1);
        enemy.anims.play("mob-walk", true);
      });
    }
    if (this.enemies.length === 0) {
      if (this.currentWave < this.maxWaves) {
        this.currentWave++;
        this.createWave();
      } else {
        console.log("Fin du jeu, toutes les vagues ont été vaincues !");
      }
    }
  }
  update() {
    const dx = this.player.x - this.enn.x;
    const dy = this.player.y - this.enn.y;
    const angle = Math.atan2(dy, dx);
    this.enn.setVelocityX(50 * Math.cos(angle));
    this.enn.setVelocityY(50 * Math.sin(angle));
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
