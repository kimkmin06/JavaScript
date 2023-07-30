const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.ariaValueMax;
  loginForm.classList.add("hidden");
  console.log(username);
}

loginButton.addEventListener("submit", onLoginSubmit);