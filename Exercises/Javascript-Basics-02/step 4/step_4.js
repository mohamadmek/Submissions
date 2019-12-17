var b = document.getElementById("button");
b.addEventListener("click", function() {
  var r = confirm("yes or no!");
  if (r) {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("city").value = "";
  }
});
