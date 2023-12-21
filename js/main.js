$(document).ready(function(){
// 문서준비이벤트시작





const slide1 = new Swiper(".slide1", {
    //spaceBetween: 30,
    //centeredSlides: true,
    speed: 1500, 
    // pagination: {
    //     el: ".swiper-pagination",
    //   },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },

    //   pagination: {
    //     el: ".swiper-pagination",
    //   },

    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    

});

const slide2 = new Swiper(".slide2", {
    //spaceBetween: 30,
    //centeredSlides: true,
    speed: 1500, 
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },

    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",

    // },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".slide2-pagination",
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});



slide2.controller.control = slide1;
slide1.controller.control = slide2;

// $(".zep_btn").hide();

$(".zep_btn, .web_btn").hide();

$(".zep_area").mouseover(function(){
    $(this).find('.zep_btn').fadeIn();
});
$(".zep_area").mouseleave(function(){
    $(this).find('.zep_btn').stop().fadeOut();
});

$(".web_area").mouseover(function(){
    $(this).find('.web_btn').stop().fadeIn();
});
$(".web_area").mouseleave(function(){
    $(this).find('.web_btn').stop().fadeOut();
});



const slide3 = new Swiper(".slide3", {
    spaceBetween: 200,
    centeredSlides: true,
    slidesPerView: 3,
    speed: 1500, 
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
      },

});
$(".slide3 .swiper-slide dl").hide();
$(".slide3 .swiper-slide").mouseenter(function(){
    $(this).find("dl").stop().fadeIn();
});
$(".slide3 .swiper-slide").mouseleave(function(){
    $(this).find("dl").stop().fadeOut();
});




const slide4 = new Swiper(".slide4", {
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


$('.slide4').hover(function() {
    slide4.autoplay.stop();},
    function(){    
    slide4.autoplay.start();});



$(".slide4 p").hide();

$('.swiper-slide').mouseover(function(){
    $(this).find("p").stop().fadeIn();
});
$('.swiper-slide').mouseleave(function(){
    $(this).find("p").stop().fadeOut();
});


// $('.slide4').hover(function(){
//     slide4.autoplay.stop();
//   }, function(){
//     slide4.autoplay.start();
//   });

// 문서준비이벤트종료
});
