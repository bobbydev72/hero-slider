const aiCardsSlider = new Swiper('.cards-slider', {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    allowTouchMove: false,
})

const aiPromptSlider = new Swiper('.prompt-text-slider', {
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