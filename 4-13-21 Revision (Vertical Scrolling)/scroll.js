// // Open Project Details

// var winHeight = $(window).height() - 50;
// var winWidth = $(window).width() - 50;

// var openMenu = $('#side_menu_wrapper').hasClass('active');

// var slide_parent = document.getElementById("slide_container");

// $('window').on("click", function(){ explode(); });

// $('#slides').on("click", function(){ exitExplode(); });

// function exitExplode(){

// 	if ( $('#content').hasClass('reduced') ) {

// 		$('#content').css('position', 'absolute');
// 		$('#content').animate({padding: '0'});

// 		$('#content').removeClass('reduced');

// 		$('header').css('position', 'absolute');
// 		$('#slide_wrapper').animate({width: '100%'});
// 		$('#info_wrapper').animate({opacity: '0'});
// 		$('#info_wrapper').css('display', 'none');

// 		$('.fill_change').css('fill', 'white');

// 		$('#slides').css('display', 'none');

// 		$('#content').css('cursor', 'crosshair');

// 		// $('#full_attribution').addClass('fullscreen');

// 		// $('.fill_change').removeClass('blackFill');

// 		pause_slideshow = false;


// 		TweenLite.to("#preview_slide_wrapper", .5, {autoAlpha: "1", visibility: "visible"});

// 		TweenLite.to("#preview_slide_wrapper_phantom", .1, {autoAlpha: "0"});

// 		TweenLite.to("#slide_wrapper", .5, {autoAlpha: "0"});

// 		$('#preview_slide_wrapper').css('zIndex', '10');
// 	}

// }



var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
element.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){

   		explode();
      
      function explode(){

		if( !($('#side_menu_wrapper').hasClass('active')) ) {
	
			$('#content').css('position', 'relative');
			$('#content').animate({padding: '25px'});
	
			$('#content').addClass('reduced');
	
			$('header').css('position', 'relative');
			$('#slide_wrapper').animate({width: '85%'},200);
			$('#info_wrapper').animate({opacity: '1'});
			$('#info_wrapper').css('display', 'flex');

			$('.fill_change').css('fill', 'black');
	
			$('#slides').css('display', 'block');
	
			$('#content').css('cursor', 'inherit');

			// $('#full_attribution').removeClass('fullscreen');

			pause_slideshow = true;

			trigger = 'active';

			// $('.fill_change').addClass('blackFill');

			 TweenLite.to("#preview_slide_wrapper", .5, {marginTop: "-100%"});

			 TweenLite.to("#preview_slide_wrapper_phantom", .1, {autoAlpha: "1"});

			 TweenLite.to("#slide_wrapper", .5, {autoAlpha: "1"});

			 $('#preview_slide_wrapper').css('zIndex', '-1');


		}

	}

   } else {

   		exitExplode();
      
   		function exitExplode(){

	if ( $('#content').hasClass('reduced') ) {

		$('#content').css('position', 'absolute');
		$('#content').animate({padding: '0'});

		$('#content').removeClass('reduced');

		$('header').css('position', 'absolute');
		$('#slide_wrapper').animate({width: '100%'});
		$('#info_wrapper').animate({opacity: '0'});
		$('#info_wrapper').css('display', 'none');

		$('.fill_change').css('fill', 'white');

		$('#slides').css('display', 'none');

		$('#content').css('cursor', 'crosshair');

		// $('#full_attribution').addClass('fullscreen');

		// $('.fill_change').removeClass('blackFill');

		pause_slideshow = false;


		TweenLite.to("#preview_slide_wrapper", .5, {marginTop: "0%"});

		TweenLite.to("#preview_slide_wrapper_phantom", .1, {autoAlpha: "0"});

		TweenLite.to("#slide_wrapper", .5, {autoAlpha: "0"});

		$('#preview_slide_wrapper').css('zIndex', '10');
	}

}

   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);