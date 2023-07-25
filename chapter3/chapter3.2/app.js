// const hellos = document.getElementsByClassName("hello");
// const title = document.getElementsByTagName("h1");

//querySelector: 첫번째 element만 가져옴
const title1 = document.querySelector(".hello h1");
console.log(title1);

//querySelectorAll: 모든 element를 가져옴
const title2 = document.querySelectorAll(".hello h1");
console.log(title2);