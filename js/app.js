const swiper = new Swiper('.cards-slider', {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    allowTouchMove: false,
})