function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
}


//Script para el slider
let slideIndex = 0;

showSlides();

function prev (x) {
    showSlides(slideIndex += x);
}

function nextSlide (x) {
    showSlides(slideIndex += x);
}

function showSlides () {
    let i;
    let slide = document.getElementsByClassName("slider-item");

    for (i=0; i<slide.length; i++) {
        slide[i].style.display = "none";
    }

    slideIndex++;
    
    if(slideIndex > slide.length) { 
        slideIndex=1;
    }
    slide[slideIndex-1].style.display = "block";
    setInterval(showSlides(), 1000);
}