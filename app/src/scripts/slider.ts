var swiper = new Swiper(".slider", {
  slidesPerView: 1.33,
  centeredSlides: false,
  spaceBetween: 50,
  grabCursor: true,
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 1.33,
      spaceBetween: 50,
    },
  },
});