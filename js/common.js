$(document).ready(function(){
// 문서준비이벤트시작

$("#header").hide();

$(window).scroll(function () {

    if ($(this).scrollTop() >= 800) 
    {
      $("#header").fadeIn();
    }

    // if ($(this).scrollTop() >= 800) 
    // {
    //   $("#header").fadeIn();
    // }
/*     else 
    {
      $(".#header").fadeIn();

    }; */
    
  });

  
// 문서준비이벤트종료
});