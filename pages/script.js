
const header1 = document.querySelector(".header1")
const header2 = document.querySelector(".header2")
const header3 = document.querySelector(".header3")
const header4 = document.querySelector(".header4")
// const p = document.querySelector("p")
const scroll = document.querySelector(".scroll")

setTimeout(function() {
  header1.classList.add("rainbow")
  header2.classList.add("rainbow")
  header3.classList.add("rainbow")
  header4.classList.add("rainbow")
  // p.style.display = "block"
  scroll.style.display = "block"
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
}, 2000);


