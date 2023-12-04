//PopUp codigo
const cerrar = document.getElementById("closePop");
const modal = document.getElementById("modal");
const ver = document.getElementById("ver-mas");
const info = document.getElementById("mas-info")

ver.addEventListener('click', function () {
  info.classList.toggle('ver')
})
/*setTimeout(function () {
  modal.classList.add("abrir");
}, 2000);*/

cerrar.addEventListener('click', function(){
  modal.classList.remove("abrir");
});

function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobile-menu").style.width = "0%";
}


//Script para el slider
const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 10,
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  //breakpoints
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

var mediaqueryList = window.matchMedia("(min-width: 1024px)");

if (mediaqueryList.matches) {
  clearInterval(interval);
  function NextT() {
    let sliderItemFirst = document.querySelectorAll(".slider-item")[0];
    slider.style.marginLeft = "-200%";
        
    slider.style.transition = "all 3s";
    setTimeout(function() {
      slider.style.transition = "all 1s";
      slider.insertAdjacentElement('beforeend', sliderItemFirst);
      slider.style.marginLeft = "-100%";
    }, 100);
  }
  setInterval(function(){
    NextT();
  }, 3000);
}

let img = ["img/promociones/promo-coronas.jpeg", 
          "img/promociones/blanqueamiento-cuadrado-juarez.jpg", 
          "img/promociones/brackets-cuadrado-juarez.jpg", 
          "img/promociones/muelas-cuadrado-juarez.jpg",
          "img/promociones/placas-cuadrado-juarez.jpg",
          "img/promociones/limpieza-multiservice-cuadrado-dental-juarez.jpg"];

//Scripts para el slider promos
function openSlider(id) {
    document.getElementById("mobile-slider").style.width = "100%";
    let promo = document.getElementById("slider-promos");
    promo.innerHTML += `
        <img src=${img[id]} alt="" id="imgService">`;
}

function closeSlider() {
    document.getElementById("mobile-slider").style.width = "0%";
    let promo = document.getElementById("slider-promos");
    promo.innerHTML = "";
}

const openS = document.querySelector("#slider-promos");
const closeS = document.querySelector("#slider-close");

closeS.addEventListener('click', function (){
    closeSlider();
})

//Script para el slider
const sliderPromos = document.querySelector("#slider-promos");
let sliderImg = document.querySelectorAll(".slider-promotion-img");
let sliderImgLast = sliderImg[sliderImg.length-1];

const btnLeftPro = document.querySelector("#btn-promoLeft");
const btnRightPro = document.querySelector("#btn-promoRight");

sliderPromos.insertAdjacentElement('afterbegin', sliderImgLast);

function NextPro() {
    let sliderImgFirst = document.querySelectorAll(".slider-promotion-img")[0];
    sliderPromos.style.marginLeft = "-200%";
    
    sliderPromos.style.transition = "all 0.5s";
    setTimeout(function() {
        sliderPromos.style.transition = "none";
        sliderPromos.insertAdjacentElement('beforeend', sliderImgFirst);
        sliderPromos.style.marginLeft = "0%";
    }, 500);
}

function PrevPro() {
    let sliderImg = document.querySelectorAll(".slider-promotion-img");
    let sliderImgLast = sliderImg[sliderImg.length-1];
    sliderPromos.style.marginLeft = "0";
    sliderPromos.style.transition = "all 0.5s";
    setTimeout(function() {
        sliderPromos.style.transition = "none";
        sliderPromos.insertAdjacentElement('afterbegin', sliderImgLast);
        sliderPromos.style.marginLeft = "0%";
    }, 500);
}

btnRightPro.addEventListener('click', function(){
    NextPro();
})

btnLeftPro.addEventListener('click', function(){
    PrevPro();
})
