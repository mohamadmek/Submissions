var a = document.querySelectorAll("img");
function run() {
  for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("mouseover", function() {
      a[i].src = "images/image" + (i + 1) + "_2.jpg";
    });
  }
}

function run2() {
  for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("mouseout", function() {
      a[i].src = "images/image" + (i + 1) + ".jpg";
    });
  }
}

run();
run2();
