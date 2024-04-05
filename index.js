const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const corsOption = {
  origine: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOption));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
var serveur = app.listen(8021, function () {
  var host = serveur.address().address;
  var port = serveur.address().port;

  console.log(`Example serveur listening at http://%s:%s`, host, port);
});
app.get("/", function (req, res) {
  res.send("AMoi AMoi");
});
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.use(express.static("public"));
