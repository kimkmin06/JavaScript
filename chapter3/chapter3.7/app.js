const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
  const cilckedClass = "clicked"
  
  if (h1.className === cilckedClass) {
    h1.className = "";
  } else {
    h1.className = cilckedClass;
  }
}

h1.addEventListener("click", handleTitleClick);