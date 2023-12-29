function openNav() {
  document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobile-menu").style.width = "0%";
}

const swiper_thumbnail = new Swiper(".swiper_thumbnail", {
  slidesPerView: 3,
})
const swiper = new Swiper('.swiper_main', {
  loop: true,                         
  autoplay: {                         
      delay: 2000,  
  },                   
  navigation: {                       
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper_thumbnail,
  },
})

const containerModal = document.getElementById('containerFotos')
const slider1 = document.getElementById('slider1')
const slider2 = document.getElementById('slider2')

function closeModal () {
  containerModal.classList.remove('show-modal')
  setTimeout(() => {
      containerModal.style.display = 'none'
    }, 500);
}
function showPhotos (option) {
  switch (option) {
    case 1: 
    for (i=1; i<15; i++) {
      slider1.innerHTML = `
      <div class="swiper-slide"><img src="img/Sucursales/Pitillal/${i}.jpg"></div>
      `
      slider2.innerHTML = `
      <div class="swiper-slide"><img src="img/Sucursales/Pitillal/${i}.jpg"></div>
      `
    }
    containerModal.style.display = 'flex'
      setTimeout(() => {
        containerModal.classList.add('show-modal')
      }, 100)
      break
    default:
      break
  }
}
