const images = ["00.jpg", "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg"];
// const images = ["a00.jpg", "a01.jpg", "a02.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;
// console.log(bgImage);

// document.body.appendChild(bgImage);

const bgImage = `img/${chosenImage}`;

document.body.style.backgroundImage = 'url(' + bgImage + ')'














// const images = ["00.jpg", "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg"];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);