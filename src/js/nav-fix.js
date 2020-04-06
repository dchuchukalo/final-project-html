$(document).ready(function(){
    $("#header").removeClass("page-header--fixed");
    $("#menuBurger").removeClass("menu-burger--black");
      $(window).scroll(function(){
        if ($(this).scrollTop() > 20) {
          $("#header").addClass("page-header--fixed").fadeIn('fast');
          $("#menuBurger").addClass("menu-burger--black");
        } else {
          $("#header").removeClass("page-header--fixed").fadeIn('fast');
          $("#menuBurger").removeClass("menu-burger--black");
        };
      });
  });