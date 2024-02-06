const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//   const activeClass = "active";
//   if (h1.classList.contains(activeClass)) {
//     h1.classList.remove(activeClass);
//   } else {
//     h1.classList.add(activeClass);
//   }
// }

function handleTitleClick() {
  h1.classList.toggle("active");
}
h1.addEventListener("click", handleTitleClick);
