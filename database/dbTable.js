const mysql = require("mysql");
const dbConfig = require("../Config.json");

let con = mysql.createConnection({
  host: dbConfig["db"].host,
  user: dbConfig["db"].user,
  password: dbConfig["db"].password,
  database: dbConfig["db"].database,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Successfully connect to the database");

  const sql =
    "CREATE TABLE IF NOT EXISTS personage (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), hp INT, imageLink VARCHAR(255), damage INT,  speed INT,  spell1 VARCHAR(255),  spell2 VARCHAR(255),  spell3 VARCHAR(255))";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Database successfully created");
  });
  const mobSql =
    "CREATE TABLE IF NOT EXISTS mobs (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), hp INT, imageLink VARCHAR(255), damage INT, speed INT, canShoot BOOLEAN)";

  con.query(mobSql, function (err, result) {
    if (err) throw err;
    console.log("mobs table successfully created");
  });
  const SpellSql =
    "CREATE TABLE IF NOT EXISTS spell (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), imageLink VARCHAR(255), damage INT, couldown INT, canShoot BOOLEAN)";

  con.query(SpellSql, function (err, result) {
    if (err) throw err;
    console.log("spell table successfully created");
  });
});
