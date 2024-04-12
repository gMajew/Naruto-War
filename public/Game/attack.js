const mysql = require("mysql");
const dbConfig = require("../Config.json");

let con = mysql.createConnection({
  host: dbConfig["db"].host,
  user: dbConfig["db"].user,
  password: dbConfig["db"].password,
  database: dbConfig["db"].database,
});

function update() {
  mobs.forEach((mobSql) => {
    let distance = Phaser.Math.Distance.Between(
      player.x,
      player.y,
      mobSql.x,
      mobSql.y
    );
    if (distance < mobSql.canshoot) {
      sql.hp -= mobSql.damage;
    }
  });
}
