const sliderMain = new Swiper('.slider_main', {
    freeMode: true, // слайдер можна зупинити в будь який момент
    centeredSlides: true, // перший слайд буде по центру сторінки
    mousewheel: true, // додали прокрутку на скролл мишки
    parallax: true, // чтоб во время прокрута слйдера фон тоже прокручивался
    breakpoints: {
        0 : {
            slidesPerView: 2.5, // скільки слайдів буде відображено
            spaceBetween: 20
        },
        680 : {
            slidesPerView: 3.5, // скільки слайдів буде відображено
            spaceBetween: 60
        }
    }
});

const sliderBg = new Swiper('.slider_bg', {
    centeredSlides: true, 
    parallax: true,
    slidesPerView: 3.5, 
    spaceBetween: 60 
});

sliderMain.controller.control = sliderBg;

document.querySelectorAll('.slider_item').forEach(item => {
    item.addEventListener('click', e => {
        item.classList.toggle('opened')
    })
});

let desc = document.querySelector('.description');
sliderMain.on('slideChange', e => {
    console.log(sliderMain.activeIndex);
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})