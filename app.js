const titleDiv = document.getElementById("title-container");
const pageP = document.querySelectorAll('p');

console.log(titleDiv);
console.log(pageP);

const borderDiv = titleDiv.style;

gsap.from(titleDiv, { opacity: 0, duration: 3, y: -50 });
gsap.from(pageP, { opacity: 0, duration: 2, y: +50 });
