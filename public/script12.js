let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');

menu.onclick = () => {
    /* При нажатии на меню, оно появляется */
    navbar.classList.toggle('active');
    /* Анимация иконки "Меню(больше)" при нажатии */
    menu.classList.toggle('move');
    /*исчезнование окошки уведомлений при нажатии на меню*/
    bell.classList.remove('active');
    /*исчезнование окошки аккаунта при нажатии на меню*/
    profile.classList.remove('active');
    /*исчезнование окошки аккаунта при нажатии на меню*/
    ch_list.classList.remove('active');
}


/*Уведомления */
let bell = document.querySelector('.notification');
document.querySelector('#bell-icon').onclick = () => {
    bell.classList.toggle('active');
}

let profile = document.querySelector('.account');
document.querySelector('#account_icon').onclick = () => {
    profile.classList.toggle('active');
}

let ch_list = document.querySelector('.chapter_list');
document.querySelector('#list_icon').onclick = () => {
    profile.classList.toggle('active');
}



//Google Maps
function initMap() {
  var macc = {lat: 42.1382114, lng: -71.5212585};
  var map = new google.maps.Map(
      document.getElementById('mapAPI'), {zoom: 18, center: macc});
  var marker = new google.maps.Marker({position: macc, map: map});
}

//Swiper AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay:5000,
        disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 6, /*Кол. слайдов на всю ширину сайта*/
        spaceBetween: 20,
      },
    },
  });