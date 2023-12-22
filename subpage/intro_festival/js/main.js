$(document).ready(function(){
// 문서준비이벤트시작

// $(".depth2").hide();
// $(".sitemap > ul > li").click(function(){
//     $(this).find(".depth2").slideToggle();
//     $(this).siblings().find(".depth2").slideUp();
// });
// $(".ham_area").click(function(){
//     $(".sitemap").addClass("on");
//     $(".sitemap").removeClass("close");

// });

// $(".sitemap_close").click(function(){
//     $(".sitemap").addClass("close");
//     $(".sitemap").removeClass("on");
// });

const slide1 = new Swiper(".slide1", {
    centeredSlides: true,
    speed: 1500, 
    spaceBetween: 200,

    slidesPerView: 3,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },


      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

// $('.slide1').hover(function() {
//     slide1.autoplay.stop();},
//     function(){    
//     slide1.autoplay.start();});


// 문서준비이벤트종료
});

