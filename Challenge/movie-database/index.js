const express = require("express");
const app = express();
const port = 3000;

const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 }
];

app.get("/movies/add?", (req, res) => {
  let year = req.query.year;
  let rating = req.query.rating;
  let intRating = parseInt(rating);
  let intYear = parseInt(year);
  let arrYear = year.split("");
  console.log(arrYear.length);
  function yearCheck() {
    if (arrYear.length == 4 && req.query.year) {
      return true;
    } else {
      return false;
    }
  }

  if (req.query.title && yearCheck() && req.query.rating) {
    movies.push({ title: req.query.title, year: intYear, rating: intRating });
    res.send({ status: 200, message: "ok", data: movies });
  } else if (req.query.title && yearCheck()) {
    movies.push({ title: req.query.title, year: intYear, rating: 4 });
    res.send({ status: 200, message: "ok", data: movies });
  } else {
    res.send({
      status: 403,
      error: true,
      message: "you cannot create a movie without providing a title and a year"
    });
  }
  // movies.push({title: req.query.t, year: req.query.y, rating: req.query.r})
});

app.get("/movies/get", (req, res) => {
  res.send({ status: 200, message: "ok", data: movies });
});

app.get("/movies/get/by-date", (req, res) => {
  const sortedMovies = movies.sort((a, b) => a.year - b.year);
  res.send({ status: 200, message: "ok", data: sortedMovies });
});

app.get("/movies/get/by-rating", (req, res) => {
  const sortedMoviesRating = movies.sort((a, b) => b.rating - a.rating);
  res.send({ status: 200, message: "ok", data: sortedMoviesRating });
});

app.get("/movies/get/by-title", (req, res) => {
  const sortedMoviesTitle = movies.sort((a, b) => a.title - b.title);
  res.send({ status: 200, message: "ok", data: sortedMoviesTitle });
});

app.get("/movies/get/:id", (req, res) => {
  movies.forEach((movie, index) => {
    if (index == req.params.id) {
      res.send({ status: 200, message: "ok", data: movie });
    } else {
      res.send({
        status: 404,
        error: true,
        message: `the movie ${req.params.id} does not exist`
      });
    }
  });
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
