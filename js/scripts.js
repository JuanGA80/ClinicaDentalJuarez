function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
}


//Script para el slider
const slider = document.querySelector("#slider");
let sliderItem = document.querySelectorAll(".slider-item");
let sliderItemLast = sliderItem[sliderItem.length-1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderItemLast);

function Next() {
    let sliderItemFirst = document.querySelectorAll(".slider-item")[0];
    slider.style.marginLeft = "-200%";
    
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderItemFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev() {
    let sliderItem = document.querySelectorAll(".slider-item");
    let sliderItemLast = sliderItem[sliderItem.length-1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderItemLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next();
})

btnLeft.addEventListener('click', function(){
    Prev();
})

const interval = setInterval(function(){
    Next();
}, 3500);

var mediaqueryList = window.matchMedia("(min-width: 1440px)");

if (mediaqueryList.matches) {
    clearInterval(interval);
}

//Scripts para el slider promos
function openSlider() {
    document.getElementById("mobile-slider").style.width = "100%";
}

function closeSlider() {
    document.getElementById("mobile-slider").style.width = "0%";
}

const openS = document.querySelector("#slider-promos");
const closeS = document.querySelector("#slider-close");

closeS.addEventListener('click', function (){
    closeSlider();
})