let mysql = require("mysql");
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
  con.query("CREATE DATABASE IF NOT EXISTS dttest", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
