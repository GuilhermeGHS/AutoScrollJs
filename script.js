$(document).ready(function() {

	$('[href*="#"]').click(function(event) {
		event.preventDefault();

		var element = $(this);
		var to = element.attr('href');
		var marginTop = 0; // fixed navbar
		var time = 1000; // animation time
		
		$('html, body').animate({
	    scrollTop: $(to).offset().top - marginTop
	  }, time);
	});

});