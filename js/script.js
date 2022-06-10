$(document).ready(function(){
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $(window).scroll(function(){
    	if(this.scrollY > 500){
    		$('.scroll-up-btn').addClass("show");
    	} else{
    		$('.scroll-up-btn').removeClass("show");
    	}
    });

    //slide-up script
    $('.scroll-up-btn').click(function(){
    	$('html').animate({scrollTop:0});
    });

    // typing text animation script
	var typed = new Typed(".typing", {
		strings: ["Programmer", "Developer", "Student" , "Gamer"],
		typeSpeed: 100,
		backSpeed: 60,
		loop:true
	});
	var typed = new Typed(".typing2", {
		strings: ["Programmer", "Developer", "Student" , "Gamer"],
		typeSpeed: 100,
		backSpeed: 60,
		loop:true
	});
});