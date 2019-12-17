let password = document.querySelector("#password");
let confirmation = document.querySelector("#confirmation");
let inputs = document.querySelectorAll("input");
document.querySelector("button").addEventListener("click", () => {
  password.value != confirmation.value
    ? inputs.forEach(Element => {
        Element.style.border = "3px solid red";
      })
    : alert("success");
});
