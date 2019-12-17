// Typed JS
var typed3 = new Typed('#typed1', {
    strings: ['#jangan Lelah Jadi Baik, <i>Karena...</i>', '"Sebaik-baik manusia adalah paling bermanfaat bagi manusia".<i>(HR.Ahmad)</i>'],
    typeSpeed: 30,
    backSpeed: 30,
    smartBackspace: true, // this is a default
    loop: true
});

(function ($) {

	// Carousel External for slide the multiple card 
	$('#exampleSlider').multislider({
        interval: 4000,
        slideAll: false,
        duration: 500
    });

	// Hover Effect for Icon Share, Download, and Like
	var $gallery = $('.no-touch #cd-gallery-items').children('li');
	$gallery.hover(
				
		function () {
			$(this).find('.icon-link').addClass('show');
			$(this).find('.icon-link').removeClass('hide');
		}, 
		 
		function () {
			$(this).find('.icon-link').addClass('hide');
			$(this).find('.icon-link').removeClass('show');
		}
	);
	// Toggle Button for baloon dialog

	$('.spbtn').click(function(){
		$('.speech-bubble').toggle()
	});

	// Make a Slideshow when hovering content
	
	// Cycle plugin
	$('.slides').cycle({
	    fx:     'none',
	    speed:   400,
		timeout: 400,
		slideResize: 0
	}).cycle("pause");

	// Pause &amp; play on hover
	$('.cd-item-wrapper').hover(
		function () {
			$(this).find('.slides').addClass('active').cycle('resume');
		}, 
		function () {
			$(this).find('.slides').removeClass('active').cycle('pause');
		}
	);
})(jQuery);

