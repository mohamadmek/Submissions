const express = require("express");
const app = express();
const port = 3000;

app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});

app.get("/test/:id", (req, res) => {
  let id = req.params.id;
  res.send({ status: 200, message: `hello ${id}` });
});

app.get("/search?", (req, res) => {
  if (req.query.s) {
    const search = req.query.s;
    res.send({ status: 200, message: "ok", data: search });
  } else {
    res.send({
      status: 500,
      error: true,
      message: "you have to provide a search"
    });
  }
});
app.get("/time", (req, res) => {
  let date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  res.send({ status: 200, message: `${hours}:${min}` });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
