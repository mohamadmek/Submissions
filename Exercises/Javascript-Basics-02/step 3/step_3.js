var input = document.getElementById("name");
input.addEventListener("keyup", function() {
  var div = document.getElementById("div");
  div.innerText = input.value;
});
