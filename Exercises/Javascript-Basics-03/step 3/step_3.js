let divs = document.querySelectorAll(".color");
let text = document.querySelector("p");
let green = divs[0];
let red = divs[1];
let blue = divs[2];

green.addEventListener("click", () => {
  text.classList.remove("red", "blue");
  text.classList.add("green");
});

red.addEventListener("click", () => {
  text.classList.remove("green", "blue");
  text.classList.add("red");
});

blue.addEventListener("click", () => {
  text.classList.remove("green", "red");
  text.classList.add("blue");
});
