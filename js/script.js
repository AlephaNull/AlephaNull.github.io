// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;

    // Original:
    // const sectionTop = current.offsetTop - 50;
    //  
    // Alex Turnwall's update:
    // Updated original line (above) to use getBoundingClientRect instead of offsetTop, based on:
    // https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/
    // https://newbedev.com/difference-between-getboundingclientrect-top-and-offsettop
    // This allows the use of sections inside a relative parent, which I'm not using here, but needed for a project
    //
    const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
    const sectionId = current.getAttribute("id");

    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }


  });
}

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

const descNerd = document.querySelector(".desc-nerd");
const descNormal = document.querySelector(".desc-normal");
const togBtn = document.querySelector("#togBtn");
const titleNerd = document.querySelector(".title-nerd");
const titleNorm = document.querySelector(".title-normal");

// descNerd.classList.add("hide-text");

togBtn.addEventListener("click", function() {
  if (togBtn.checked == true) {
    /** descriptions **/
    descNerd.classList.add("hide-text");
    descNormal.classList.remove("hide-text");
    /** titles **/
    // titleNerd.classList.toggle("hide-text");
    titleNerd.classList.add("hide-text");
    titleNorm.classList.remove("hide-text");

  } else {
    descNerd.classList.remove("hide-text");
    descNormal.classList.add("hide-text");
    /** titles **/
    // titleNorm.classList.toggle("hide-text");
    titleNerd.classList.remove("hide-text");
    titleNorm.classList.add("hide-text");
  }
})




