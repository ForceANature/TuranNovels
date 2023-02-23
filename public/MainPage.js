let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');

menu.onclick = () => {
  /* При нажатии на меню, оно появляется */
  navbar.classList.toggle('active');
  /* Анимация иконки "Меню(больше)" при нажатии */
  menu.classList.toggle('move');
  /*исчезнование окошки уведомлений при нажатии на меню*/
  bell.classList.remove('active');
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
    delay: 5000,
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
      slidesPerView: 5,
      /*Кол. слайдов на всю ширину сайта*/
      spaceBetween: 20,
    },
  },
});
