class Spell {
  constructor(id, name, description, damage, cooldown) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.damage = damage;
    this.cooldown = cooldown;
  }
}

class Character {
  constructor(id, name, hp, imageLink, damage, speed, spell1, spell2, spell3) {
    this.id = id;
    this.name = name;
    this.hp = hp;
    this.imageLink = imageLink;
    this.damage = damage;
    this.speed = speed;
    this.spells = [spell1, spell2, spell3];
  }
}

//Spell
const NarutoSpell1 = new Spell(
  1,
  "Rasengan",
  "Attaque distance Blablablabla...",
  30,
  5
);
const NarutoSpell2 = new Spell(
  2,
  "RasenganShuriken",
  "Attaque distance surpuissante",
  80,
  15
);
const NarutoSpell3 = new Spell(
  3,
  "KyubiMode",
  "Transformation en Kuyibi, détruit les mobs autour",
  200,
  30
);

const SasukeSpell1 = new Spell(
  1,
  "Chidori",
  "Attaque corps à corps blablablablabla...",
  40,
  6
);
const SasukeSpell2 = new Spell(
  2,
  "Amateratsu",
  "Flamme noir blablablablabla...",
  70,
  12
);
const SasukeSpell3 = new Spell(
  3,
  "Susanoo",
  "Armure Susanoo, détruit les mobs autour",
  100,
  30
);

//Shinobi
const Naruto = new Character(
  1,
  "Naruto",
  100,
  "naruto.png",
  20,
  10,
  NarutoSpell1,
  NarutoSpell2,
  NarutoSpell3
);
const Sasuke = new Character(
  2,
  "Sasuke",
  80,
  "sasuke.png",
  15,
  15,
  SasukeSpell1,
  SasukeSpell2,
  SasukeSpell3
);

console.log(Naruto);
console.log(Sasuke);
