// Selecting DOM elements 
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close-x");
const nav = document.querySelector("nav");

// listens for click events and when a click occurs a class is created see CSS
hamburger.addEventListener('click', () => {
  nav.classList.add('open-nav');
  hamburger.classList.add('spin');

})

close.addEventListener('click', () => {
  nav.classList.remove('open-nav');
  hamburger.classList.remove('spin');

})

///////////////////////////
