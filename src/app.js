const btn = document.querySelector(".search-btn");
const input = document.querySelector(".search-input");

btn.addEventListener("click", () => {
  input.classList.toggle("active")
  input.focus()
});

const buttonToggle = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu-toggle");
const content = document.querySelector(".video-container");
const clickArea = document.querySelector(".clickArea");

buttonToggle.addEventListener("click", () => {
 menuToggle.classList.toggle("active")
 buttonToggle.classList.toggle("active")
 content.classList.toggle("active")
 clickArea.classList.toggle("active")
 document.body.style.backgroundColor = menuToggle.classList.contains("active") ? "rgb(8, 8, 8)" :  "rgb(8, 8, 8)"
});

  clickArea.addEventListener("click", () => {
  menuToggle.classList.remove("active")
  buttonToggle.classList.remove("active")
  content.classList.remove("active")
  clickArea.classList.remove("active")
   document.body.style.backgroundColor =  "rgb(8, 8, 8)" 
});

const moreButtom = document.querySelector(".more-mobile");
const menuCard = document.querySelector(".toggle-more");

 moreButtom.addEventListener("click", () => {
 clickArea.classList.toggle("active")
 moreButtom.classList.toggle("active")
 menuCard.classList.toggle("active")
 
});
 clickArea.addEventListener("click", () => {
 moreButtom.classList.remove("active")
 menuCard.classList.remove("active")
});


//Fiz somente como eu entendi, usei só o class que esta no html e css.

  const subscribeButton = document.querySelector(".subscribe-button");
  let = isSubscribed = JSON.parse(localStorage.getItem("isSubscribed")) || false; 
  if(isSubscribed){
  subscribeButton.classList.add("subscribed");
  subscribeButton.textContent = "Subscribed";
}

  subscribeButton.addEventListener("click", () => {

  subscribeButton.classList.toggle("subscribed");

  if(subscribeButton.classList.contains("subscribed")){
    subscribeButton.textContent = "Subscribed";
    isSubscribed = true;
  }else{
    subscribeButton.textContent = "Subscribe";
    isSubscribed = false;
  }
  localStorage.setItem("isSubscribed", JSON.stringify(isSubscribed));
  });
 
   
    
   
   //precisa do stringify para ler objetos e arrays, para salvar.
   //precisa ser em parse para transformar de volta "true" em true
