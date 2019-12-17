var a = document.querySelectorAll("img");
function run() {
  for (let i = 0; i < a.length; i++) {
    console.log(i);
    a[i].addEventListener("mouseover", function() {
      a[i].src = "images/image" + (i + 1) + "_2.jpg";
    });
  }
}

run();
