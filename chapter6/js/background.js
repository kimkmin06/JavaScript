const images = ["img1.jpg","img2.jpg","img3.jpg"];

const chosenImg = images[Math.floor(Math.random()*images.length)];

// const bgImg = document.createElement("img");
const bgImg = document.createElement("style");

// bgImg.src = `img/${chosenImg}`;
bgImg.innerText = `body {background-image: url(img/${chosenImg}); background-position: center; background-repeat: no-repeat; background-size: cover; }`;

document.body.appendChild(bgImg);