const express = require("express");
const app = express();
const port = 3000;

const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 }
];

app.get("/movies/add", (req, res) => {
  res.send({ status: 200, message: "ok" });
});

app.get("/movies/get", (req, res) => {
  res.send({ status: 200, message: "ok", data: movies });
});

app.get("/movies/get/by-date", (req, res) => {
  const sortedMovies = movies.sort((a, b) => b.year - a.year);
  res.send({ status: 200, message: "ok", data: sortedMovies });
});

app.get("/movies/edit", (req, res) => {
  res.send({ status: 200, message: "ok" });
});

app.get("/movies/delete", (req, res) => {
  res.send({ status: 200, message: "ok" });
});

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
