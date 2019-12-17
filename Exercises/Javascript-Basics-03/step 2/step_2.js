const links = document.querySelectorAll("a");
const text = document.querySelector("p");
// for(let i = 0; i < a.length; i++){
//     a[i].addEventListener('click', () => {
//         if(i == 0){
//             t.style.display = "block";
//         } else {
//             t.style.display = "none";
//         }
//     });
// }

links.forEach(Element => {
  Element.addEventListener("click", () => {
    Element.id == "show"
      ? (text.style.display = "block")
      : (text.style.display = "none");
  });
});
