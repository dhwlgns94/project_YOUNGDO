$(document).ready(function(){
// 문서준비이벤트시작


$(".depth2").hide();
$(".sitemap > ul > li").click(function(){
    $(this).find(".depth2").slideToggle();
    $(this).siblings().find(".depth2").slideUp();
});
$(".ham_area").click(function(){
    $(".sitemap").addClass("on");
    $(".sitemap").removeClass("close");

});

$(".sitemap_close").click(function(){
    $(".sitemap").addClass("close");
    $(".sitemap").removeClass("on");
});

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
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },

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

$(window).on('load', function() {
    setFlowBanner();
})

function setFlowBanner() {
    const $wrap = $('.flow_banner');
    const $list = $('.flow_banner .list');
    let wrapWidth = ''; //$wrap의 가로 크기
    let listWidth = ''; //$list의 가로 크기
    const speed = 92; //1초에 몇픽셀 이동하는지 설정

    //리스트 복제
    let $clone = $list.clone();
    $wrap.append($clone);
    flowBannerAct()

    //반응형 :: 디바이스가 변경 될 때마다 배너 롤링 초기화
    let oldWChk = window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
    $(window).on('resize', function() {
        let newWChk = window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
        if (newWChk != oldWChk) {
            oldWChk = newWChk;
            flowBannerAct();
        }
    });

    //배너 실행 함수
    function flowBannerAct() {
        //배너 롤링 초기화
        if (wrapWidth != '') {
            $wrap.find('.list').css({
                'animation': 'none'
            });
            $wrap.find('.list').slice(2).remove();
        }
        wrapWidth = $wrap.width();
        listWidth = $list.width();

        //무한 반복을 위해 리스트를 복제 후 배너에 추가
        if (listWidth < wrapWidth) {
            const listCount = Math.ceil(wrapWidth * 2 / listWidth);
            for (let i = 2; i < listCount; i++) {
                $clone = $clone.clone();
                $wrap.append($clone);
            }
        }
        $wrap.find('.list').css({
            'animation': `${listWidth / speed}s linear infinite flowRolling`
        });
    }

    // 마우스가 요소 위로 진입했을 때 일시정지
    $wrap.on('mouseenter', function () {
        $wrap.find('.list').css('animation-play-state', 'paused');
    });

    // 마우스가 요소에서 빠져나갈 때 재생
    $wrap.on('mouseleave', function () {
        $wrap.find('.list').css('animation-play-state', 'running');
    });
}