//Swiper JS
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
//    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Nav open Close
const body = document.querySelector('body'),
navMenu = body.querySelector('.menu-content'),
navOpenBtn = body.querySelector('.navOpen-btn'),
navCloseBtn = navMenu.querySelector('.navClose-btn');

if(navMenu && navOpenBtn){
navOpenBtn.addEventListener("click", () =>{
    navMenu.classList.add("open");
    body.style.overflowY = "hidden";
})
}


if(navMenu && navCloseBtn){
navCloseBtn.addEventListener("click", () =>{
    navMenu.classList.remove("open");
         body.style.overflowY = "scroll";
})
}

const formOpenBtn = document.querySelector("#form_open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"),
sign_upBtn = document.querySelector("#sign_up"),
login_upBtn = document.querySelector("#login_sign_up"),
pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"))
formCloseBtn.addEventListener("click", () => home.classList.remove("show"))


pwShowHide.forEach(icon => {
   icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if(getPwInput.type === "password") {
        getPwInput.type = "text";
        icon.classList.replace("uil-eye-slash", "uil-eye");
    }else{
        getPwInput.type = "password";
        icon.classList.replace("uil-eye-slash", "uil-eye-slash"); 
    }
   });
});
sign_upBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});
login_upBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});