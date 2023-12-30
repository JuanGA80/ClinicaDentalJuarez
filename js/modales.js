function openNav() {
  document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobile-menu").style.width = "0%";
}

const containerModal = document.getElementById('containerFotos')
const slider1 = document.getElementById('slider1')

function closeModalSlider () {
  containerModal.classList.remove('show-modal')
  setTimeout(() => {
      containerModal.style.display = 'none'
      slider1.innerHTML = ''
    }, 400);
}
function showPhotos (option, number, sucursal) {
  switch (option) {
    case 1: 
    for (i=1; i<number; i++) {
      const sHTML = `<div class="swiper-slide"><img src="img/Sucursales/${sucursal}/${i}.jpg"></div>`
      slider1.insertAdjacentHTML("afterbegin", sHTML)
      console.log(i)
    }
    const swiper = new Swiper('.swiper_main', {
      loop: true,                         
      autoplay: {                         
          delay: 2000,  
      },                   
      navigation: {                       
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
    })
    containerModal.style.display = 'flex'
      setTimeout(() => {
        containerModal.classList.add('show-modal')
      }, 100)
      break
    default:
      break
  }
}
