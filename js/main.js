anime({
    targets: '.img',
    translateY: 12,
    direction: 'alternate',
    easing: 'easeInOutSine',
    loop: true,
    position: 'absolute'
});




const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,


    // Navigation arrows
    navigation: {
        nextEl: '.header-right-btn',
        prevEl: '.header-left-btn',
    },
});
