$(document).ready(function(){
// 문서준비이벤트시작


$(window).scroll(function () {

    if ($(this).scrollTop() < 800) 
    {
      $("#header").fadeOut();
    }

    if ($(this).scrollTop() >= 800) 
    {
      $("#header").fadeIn();
    }
/*     else 
    {
      $(".#header").fadeIn();

    }; */
    
  });

  $("#header").hide();
  
// 문서준비이벤트종료
});