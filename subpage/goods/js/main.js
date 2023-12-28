$(document).ready(function(){
// 문서준비이벤트시작

const slide1 = new Swiper(".slide1", {
    spaceBetween: 100,
    //centeredSlides: true,
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    speed: 1500, 
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",

    },
    

});

$('.slide1').hover(function() {
    slide1.autoplay.stop();},
    function(){    
    slide1.autoplay.start();});


// 문서준비이벤트종료
});

