const btn = document.querySelector(".search-btn");
const input = document.querySelector(".search-input");

btn.addEventListener("click", () => {
  input.classList.toggle("active")
  input.focus()
});

const buttonToggle = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu-toggle");
const content = document.querySelector(".video-container");
const background = document.querySelector(".background");

buttonToggle.addEventListener("click", () => {
 menuToggle.classList.toggle("active")
 buttonToggle.classList.toggle("active")
 content.classList.toggle("active")
 background.classList.toggle("active")
 document.body.style.backgroundColor = menuToggle.classList.contains("active") ? "rgb(8, 8, 8)" :  "rgb(8, 8, 8)"
});

  background.addEventListener("click", () => {
  menuToggle.classList.remove("active")
  buttonToggle.classList.remove("active")
  content.classList.remove("active")
  background.classList.remove("active")
   document.body.style.backgroundColor =  "rgb(8, 8, 8)" 
});

const moreBottom = document.querySelector(".more-mobile");
const menuBottom = document.querySelector(".box-more");

moreBottom.addEventListener("click", () => {
 menuBottom.classList.toggle("active")
 moreBottom.classList.toggle("active")
 
});
moreBottom.addEventListener("click", () => {
 menuBottom.classList.remove("active")
 moreBottom.classList.remove("active")
});