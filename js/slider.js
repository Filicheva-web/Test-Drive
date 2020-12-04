import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";

jQuery(function ($) {
  $(".swiper-object .swiper-container").each(function (index, value) {
    var mySwiper = new Swiper(value, {
      width: 1194,

      spaceBetween: 33,
      slidesPerView: 4,
      direction: "horizontal",
      loop: true,
      watchOverflow: true,
      setWrapperSize: true,
      slidesOffsetBefore: 23,
      // Navigation arrows
      navigation: {
        nextEl: value.nextElementSibling.nextElementSibling,
        prevEl: ".button-prev",
      },
    });
  });
});
