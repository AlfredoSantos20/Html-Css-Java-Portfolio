
/*====== sticky navbar ======*/
window.onscroll= () => {
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);
};

/*====== Image Swiper ======*/
var swiper = new Swiper('.Slider-container', {
    effect: 'cards',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
  });



