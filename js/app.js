const aiCardsSlider = new Swiper('.cards-slider', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    allowTouchMove: false,
})

const aiFadeSwiper = new Swiper('#fadeSlider', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    allowTouchMove: false,
})

const aiMainSwiperSlider = new Swiper('.main-swiper-slider', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    allowTouchMove: false,
})

