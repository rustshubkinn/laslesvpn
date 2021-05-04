import Swiper from "swiper/bundle";

new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    freemode: true,
  },
});
