//PopUp codigo
const cerrar = document.getElementById("closePop");
const modal = document.getElementById("modal");
const ver = document.getElementById("ver-mas");
const info = document.getElementById("mas-info")
const container = document.getElementById('container-btn')
const botones = container.querySelectorAll('button')

ver.addEventListener('click', function () {
  info.classList.toggle('ver')
})
/*setTimeout(function () {
  modal.classList.add("abrir");
}, 2000);*/

botones.forEach((userItem) => {
  userItem.addEventListener('click', () => {
    modal.classList.add("abrir");
  })
});
modal.addEventListener('click', () => {
  modal.classList.remove("abrir");
})
cerrar.addEventListener('click', function(){
  modal.classList.remove("abrir");
});

function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobile-menu").style.width = "0%";
}




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