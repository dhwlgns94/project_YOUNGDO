$(document).ready(function(){
// 문서준비이벤트시작


$(window).scroll(function () {
    if ($(this).scrollTop() > 919 && $(this).scrollTop() <= 9662) 
    {
      $("#header").fadeIn();
    } 
    else 
    {
      $(".#header").fadeOut();

    };
    
  });


  
// 문서준비이벤트종료
});