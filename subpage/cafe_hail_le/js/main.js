$(document).ready(function(){
// 문서준비이벤트시작
$(".sec3_img_cen img").mouseenter(function(){
  $(".sec3_img_left li").eq(1).stop().animate({opacity : 1
  }, 500, function(){
    $(".sec3_img_left li").eq(2).stop().animate({opacity : 1
    }, 505, function(){
      $(".sec3_img_left li").eq(3).stop().animate({opacity : 1
      }, 510, function(){
        $(".sec3_img_left li").eq(4).stop().animate({opacity : 1
        }, 515, function(){
          $(".sec3_img_left li").eq(5).stop().animate({opacity : 1
          }, 520);
          });
        });
      });
    });
});

$(".sec3_img_left img").mouseenter(function(){
  $(".sec3_img_cen li").eq(1).stop().animate({opacity : 1
  }, 500, function(){
    $(".sec3_img_cen li").eq(2).stop().animate({opacity : 1
    }, 505, function(){
      $(".sec3_img_cen li").eq(3).stop().animate({opacity : 1
      }, 510, function(){
        $(".sec3_img_cen li").eq(4).stop().animate({opacity : 1
        }, 515);
      });
    });
    });
});



// $(".sec3_img_cen img").mouseleave(function(){
//   $(".sec3_img_left li(n+2)").stop().animate({opacity : 0});

// });

$(window).scroll(function(){

  if ($(this).scrollTop() >= 2600)
  {
    $(".sec3_img_cen img").addClass("on").removeClass("off");
    $(".sec3_img_left img").addClass("on").removeClass("off");

  }
  else
  {
    $(".sec3_img_cen img").addClass("off").removeClass("on");
    $(".sec3_img_left img").addClass("off").removeClass("on");
  }

});




const slide1 = new Swiper(".slide1", {
    spaceBetween: 500,
    centeredSlides: true,
    slidesPerView: 3,
    speed: 1500, 
    loop: true,
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





// 문서준비이벤트종료
});  