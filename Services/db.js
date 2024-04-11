const mysql = require("mysql2/promise");
const dbConfig = require("../Config.json");

async function query(sql, params) {
  const con = await mysql.createConnection(dbConfig["db"]);
  const [results] = await con.execute(sql, params);

  return results;
}

module.exports = {
  query,
};
