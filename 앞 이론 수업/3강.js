document.title = "hello! from js!";

// const title = document.getElementById("title");

// title.innerText = "hello";

// const hello = document.querySelector(".hello h1");
// console.log("hello");

// hello.innerText = "Hello";

const h1 = document.querySelector("h1");

function handleTitleClick() {
  h1.style.color = "blue";
}
h1.addEventListener("click", handleTitleClick);
