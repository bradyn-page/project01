 

window.onscroll = () => {
 
/*===== sticky navbar ========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);
};


/*===== swiper from swiperjs.com ========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true, //make cursor grabby on testimonials
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });