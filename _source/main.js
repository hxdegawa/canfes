$(function(){
  setTimeout(function(){
    $(".logo").addClass("visible");
    $(".logo-border").removeClass("visible");
    
    setTimeout(function(){
      $("header").addClass("mini");
      setTimeout(function(){
        $(".title-text").addClass("visible");
        $(".down").addClass("visible");
      }, 1000);
    }, 1000);
  }, 3000);
  
  $(window).scroll(function(){
    $("main").addClass("visible");
  });
  
});