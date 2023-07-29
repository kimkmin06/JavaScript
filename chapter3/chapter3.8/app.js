const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick() {

  // const cilckedClass = "clicked"
  // if (h1.className.contains(cilckedClass)) {
  //   h1.classList.remove(cilckedClass);
  // } else {
  //   h1.classList.add(cilckedClass);
  // }

  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);