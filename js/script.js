$(document).ready(function(){
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
	var typed = new Typed(".typing", {
		strings: ["Programmer", "Developer", "Student" , "Gammer"],
		typeSpeed: 100,
		backSpeed: 60,
		loop:true
	});
	var typed = new Typed(".typing2", {
		strings: ["Programmer", "Developer", "Student" , "Gammer"],
		typeSpeed: 100,
		backSpeed: 60,
		loop:true
	});
});