function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderColumns = document.querySelectorAll(".column");
function checkSlide(e) {
  sliderColumns.forEach(sliderColumn => {
    const slideInAt =
      window.scrollY + window.innerHeight - sliderColumn.height / 2;
    const imageBottom = sliderColumn.offsetTop + sliderColumn.height;
    const isHalfShown = slideInAt > sliderColumn.offsetTop;
    const isNotScrollPast = window.scrollY < imageBottom;
    if (isHalfShown) {
      sliderColumn.classList.add("column-active");
    } else {
      console.log("asflnjsdg");
    }
  });
}
window.addEventListener("scroll", debounce(checkSlide));
