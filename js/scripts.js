function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
}


//Script para el slider
var slideIndex = 0;

showSlides();

function prevSlide (x) {
    showSlides(slideIndex += x);
}

function nextSlide (x) {
    showSlides(slideIndex += x);
}

function showSlides () {
    var i;
    var slide = document.getElementsByClassName("slider-item");

    for (i=0; i<slide.length; i++) {
        slide[i].style.display = "none";
    }
    slideIndex++;
    
    if(slideIndex > slide.length) { 
        slideIndex=1;
    }
    slide[slideIndex-1].style.display = "block";
}