const express = require("express");
const app = express();
const port = 3000;

app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});

app.get("/time", (req, res) => {
  let date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  res.send({ status: 200, message: `${hours}:${min}` });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
