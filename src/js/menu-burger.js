$(function(){
	$("#menuBurger").click(function(){
	  if ($("#siteNav").hasClass("menu-wrap--mobile")){
		$("#siteNav").removeClass("menu-wrap--mobile");
		$("#menuBurger").removeClass("menu-burger--close");
	  } else {
		$("#siteNav").addClass("menu-wrap--mobile");
		$("#menuBurger").addClass("menu-burger--close");
	  }
	});
  });