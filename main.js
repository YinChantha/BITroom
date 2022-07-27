
(function () {
    "use strict";
    new Swiper(".clients-slider", {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        767: {
          slidesPerView: 1,
          spaceBetween: 30,
          centeredSlides: true,
        },
  
        768: {
          slidesPerView: 2,
          spaceBetween: 60,
          centeredSlides: false,
          centeredSlidesBounds: false,
        },
        1199: {
          slidesPerView: 2,
          spaceBetween: 10,
          centeredSlides: false,
          centeredSlidesBounds: false,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 50,
          centeredSlides: false,
          centeredSlidesBounds: false,
        },
      },
    });
    new Swiper(".portfolio-details-slider", {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
    
    /**
     * Testimonials slider
     */
    new Swiper(".testimonials-slider", {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
  })();
  