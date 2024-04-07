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
  console.log("Connected!");
  const sql =
    "INSERT INTO personage ( name, hp, imageLink, damage,  speed,  spell1,  spell2,  spell3) VALUES ?";
  const values = [
    [
      "Naruto",
      200,
      "url",
      20,
      15,
      "NarutoSpell1",
      "NarutoSpell2",
      "NarutoSpell3",
    ],
    [
      "Sasuke",
      230,
      "url",
      25,
      12,
      "SasukeSpell1",
      "SasukeSpell2",
      "SasukeSpell3",
    ],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Successfuly inserted : " + result.affectedRows);
  });
});
