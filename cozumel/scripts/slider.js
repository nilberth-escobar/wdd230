var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      810: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1250: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });