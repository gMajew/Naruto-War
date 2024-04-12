class mob {
  constructor(id, name, hp, imageLink, damage, speed, canShoot) {
    this.id = id;
    this.name = name;
    this.hp = hp;
    this.imageLink = imageLink;
    this.damage = damage;
    this.speed = speed;
    this.canShoot = Boolean(canShoot);
  }
}

const OttoShinobi = new mob(
  1,
  "OttoShinobi",
  30,
  "Otto.png",
  5,
  10,
  SasukeSpell1,
  SasukeSpell2,
  SasukeSpell3
);

// Méthode pour vérifier la proximité avec le personnage
//   checkProximityToCharacter(character, proximityDistance) {
//     const distance = Math.sqrt(
//       Math.pow(this.x - character.x, 2) + Math.pow(this.y - character.y, 2)
//     );

//     if (distance <= proximityDistance) {
//       this.canShoot = true;
//     } else {
//       this.canShoot = false;
//     }
//   }
