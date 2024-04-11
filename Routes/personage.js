const express = require("express");
const router = express.Router();
const personage = require("../Services/personage.js");
router.get("/", async function (req, res, next) {
  try {
    res.json(await personage.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting personage `, err.message);
    next(err);
  }
});

module.exports = router;
