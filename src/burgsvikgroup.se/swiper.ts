const swiperEl = document.querySelector('.swiper');

const totalSlides = document.querySelectorAll('.swiper-slide').length;
$('.swiper-number-total').text(totalSlides);

const swiper = new Swiper(swiperEl, {
  slidesPerView: 2,
  keyboard: {
    enabled: true,
  },
  slidesPerGroup: 2,
  spaceBetween: 0,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: document.querySelector('.swiper-next'),
    prevEl: document.querySelector('.swiper-prev'),
  },
  zoom: {
    maxRatio: 1.5,
  },
});

swiper.on('slideChange', function (e) {
  $('.swiper-number-current').text(e.realIndex + 1);
});
