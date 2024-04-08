const db = require("./db");
const helper = require("../database/helper.js");
const dbConfig = require("../Config.json");
async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, dbConfig.listPerPage);
  const rows = await db.query(`SELECT * FROM personage`);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

module.exports = {
  getMultiple,
};
