const title = document.querySelector(".hello:first-child h1");

console.log(title);
console.dir(title);

function handleTitleClick() {
  title.style.color = "blue";
  console.log("title was clicked!");
}

title.addEventListener("click", handleTitleClick);