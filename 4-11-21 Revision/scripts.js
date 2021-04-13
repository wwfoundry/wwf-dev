$(document).ready(function (){

	var image = $('#slide_container'),
	header = $('#prod_heading'),
	// thumbnails = $('#thumbnail_gallery'),
	artist = $('#artist'),
	work = $('#work'),
	year = $('#year'),
	material = $('#material'),
	artistFull = $('#full_artist'),
	workFull = $('#full_work'),
	yearFull = $('#full_year'),
	materialFull = $('#full_material');

	$("#hamburger").on("click", function(){

		$('#side_menu_wrapper').animate({marginRight: '100vw'}, 500);

		// $('header').css('borderBottom' , 'solid .012px white');

		$('#side_menu_wrapper').addClass("active");

		$('#content').css('filter', 'blur(1px)');

		$('#contact_content').css('filter', 'blur(1px)');

		// $('#menu').css('display', 'none');

	});

	$("#xit").on("click", function(){

		if ( $('#side_menu_wrapper').hasClass('active') ){

			$('#side_menu_wrapper').animate({marginRight: '0'}, 500);

			// $('header').css('borderBottom' , 'solid .012px #bebec1');

			$('#content').css('filter', 'blur(0px)');

			$('#contact_content').css('filter', 'blur(0px)');

			$('#side_menu_wrapper').removeClass("active");

			// $('#menu').css('display', 'flex');

		}

	});

// Open Project Details

var winHeight = $(window).height() - 50;
var winWidth = $(window).width() - 50;

var openMenu = $('#side_menu_wrapper').hasClass('active');

var pause_slideshow = false;

var trigger = 'inactive';

var slide_parent = document.getElementById("slide_container");

      function explode(){

		if( !($('#side_menu_wrapper').hasClass('active')) ) {
	
			// $('#content').css('position', 'relative');
			// $('#content').css('padding', '25px');
	
			$('#content').addClass('revealed');
	
			// TweenLite.to("#slide_wrapper", 1, {width: "85%"});
			// $('#info_wrapper').animate({opacity: '1'});
			// $('#info_wrapper').css('display', 'flex');

			$('.fill_change').css('fill', 'black');
	
			$('#content').css('cursor', 'inherit');

			// $('#full_attribution').removeClass('fullscreen');

			// $('.fill_change').addClass('blackFill');

			  TweenLite.to("#preview_slide_wrapper", 1, {marginTop: "-100%"});

			 TweenLite.to("#preview_slide_wrapper_phantom", .1, {autoAlpha: "1"});

			 TweenLite.to("#content", .5, {autoAlpha: "1", marginTop: "0"});

			 $('header').css({'position': 'relative', 'top': 'unset'});

			 $('#preview_slide_wrapper').css('zIndex', '-1');


		}

	}

   		function exitExplode(){

	if ( $('#content').hasClass('revealed') ) {

		// $('#content').css('position', 'absolute');
		// $('#content').css('padding', '0');

		$('#content').removeClass('revealed');

		// TweenLite.to("#slide_wrapper", 1, {width: "100%"});
		// $('#info_wrapper').animate({opacity: '0'});
		// $('#info_wrapper').css('display', 'none');

		$('.fill_change').css('fill', 'white');

		$('#content').css('cursor', 'crosshair');

		// $('#full_attribution').addClass('fullscreen');

		// $('.fill_change').removeClass('blackFill');

		TweenLite.to("#preview_slide_wrapper", .5, {marginTop: "0"});

		TweenLite.to("#preview_slide_wrapper_phantom", .1, {autoAlpha: "0"});

		TweenLite.to("#content", .5, {autoAlpha: "0", marginTop: "100%"});

		$('header').css({'position': 'absolute', 'top': '25px'});

		$('#preview_slide_wrapper').css('zIndex', '10');
	}

}

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("wheel", function(s){ // or window.addEventListener("scroll"....
   var st = s.wheelDelta;
   if (st > 0){

   		exitExplode();
    

   } else {

   		explode();

   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


$('#explore_tag').click(function(){

	explode();
})

//Logo Color

var	color = slide_pulls.map(function(a) {return a.color;});

//Slide Change

//Load all image slides

var i;

for (i = 0; i < slide_pulls.length; i++){

	var slideElements = document.createElement('div');

	slideElements.innerHTML += "<div class='slide' slide-id='" + i + "' style=\"background-image:url('" + slide_pulls[i].image1 + "')\"></div>"

	slide_parent.appendChild(slideElements);

	// slide_parent.innerHTML += "<div class='slide' slide-id='" + i + "' style=\"background-image:url('" + slide_pulls[i].image1 + "')\"></div>"

	var work_year = slide_pulls[i].year;

}

// goSlide();

var slideshow;

//Slideshow

// 	function goSlide(){ 

// 		slideshow = window.setInterval(function(){

// 		if( !pause_slideshow ){

// 			trans_slide(1);
// 		}

// 	}, 4000);

// };

//Nav arrows

var i = 0;

$('#arrow_left').on("click", function(s){

	trans_slide(-1);
	s.stopPropagation();

	// clearInterval(slideshow);
	// goSlide();

	});

$('#arrow_right').on("click", function(s){

	trans_slide(1);
	s.stopPropagation();

	// clearInterval(slideshow);
	// goSlide();

	});

var cachedMove;

function trans_slide(direction){
	if( !($('#side_menu_wrapper').hasClass('active')) ) {

		image.animate({opacity: '1'}, 100, bound_trans(direction));

		function bound_trans(){

				if (direction < 1 && !0){

					i = (i-1);

					if(i < 0 ){
						i = slide_pulls.length - 1;
					}

					move(i, r = 0);

				}

				if (direction >= 1 && !0){

					i = (i+1)%slide_pulls.length;
					move(i, r = 0);

				}
		}

	}
}

function move(e){

	var slide = $(".slide");

	var current = slide.eq(e),
		next = slide.eq(e + 1),
		prev = slide.eq(e - 1);

	current.addClass('current');

	prev.addClass('prev');

	next.addClass('next');

	var newMove = cachedMove;

	slide.not( current ).removeClass('current');

	slide.not( prev ).removeClass('prev');

	slide.not( next ).removeClass('next');

	//NEW METHOD

	// var tl1 = new TimelineMax();

	// var tl2 = new TimelineMax();

	// var tl3 = new TimelineMax();

	// 	tl.to(".prev", 1, {left: '-100%', right:'0'})
	// 		.to(".next", 1, {right: '-100%', left:'0'})
	// 		.to(".current", 1, {left:0, right:0});

	//Logo Contrast

	// if (color[e] === '0'){

	// 	$('.fill_change').css('fill', 'black');

	// } else {

	// 	$('.fill_change').css('fill', 'white');

	// }

	header.html(slide_pulls[e].header);

	artist.html(slide_pulls[e].artist);
	work.html(slide_pulls[e].work);
	year.html(slide_pulls[e].year);
	material.html(slide_pulls[e].material);

	artistFull.html(slide_pulls[e].artist);
	workFull.html(slide_pulls[e].work);
	yearFull.html(slide_pulls[e].year);
	materialFull.html(slide_pulls[e].material);

	$('.thumbnail').remove();

	var thumbParent = document.getElementById("thumbnail_gallery");

	thumbParent.innerHTML = "<a class='active_thumb thumbnail' style=\"background-image:url('" + slide_pulls[e].image1 + "')\"></a>"

	var thumbsBeta = '';

	for (var t = 0; t < slide_pulls[e].thumbs.length; t++){

		thumbsBeta += "<a class='thumbnail' style=\"background-image:url('" + slide_pulls[e].thumbs[t] + "')\"></a>"
	}

	thumbParent.innerHTML += thumbsBeta;

//THUMBNAIL GALLERY

$('.thumbnail').on("click", function(s){

	var thumb_click = $(this);

	$('.current').animate({opacity: '0'}, 400, function(){

		thumb_click.addClass('active_thumb');

		$('.thumbnail').not( thumb_click ).removeClass('active_thumb');

		var thumb_background = thumb_click.css('background-image');

		$('div .current').css('background-image', thumb_background);

		$('.current').animate({opacity: '1'}, 400);

	 });

	s.stopPropagation();

});

$('#slides').on("click", function (){

	var priority_slide = slide_pulls[e].image1;

	if ( $('#content').hasClass('reduced') ) {

		$('.current').css('background-image', priority_slide)

		pause_slideshow = false;

	}

});

}

move(1);

$(document).keydown(function(e) {

	// clearInterval(slideshow);
	// goSlide();

    switch (e.which) {
        case 37:
            e.preventDefault(), trans_slide(-1);
            break;
        case 39:
            e.preventDefault(), trans_slide(1);
            break;
        case 32:
            e.preventDefault(), explode();
            break;
    }
});

//HASH CHANGE

	if(window.location.hash){

	  var getHash = window.location.hash;
	  var removeHash = getHash.replace('#', '');
	  
	  move(removeHash);
	  $('#preview_slide_wrapper').css('marginTop', '-100%');
	  explode();

	  history.replaceState(null, null, ' ');

	}


//CONTACT

	//MAP

var map = L.map('mapid', {
    center: [46.06362892338259, -118.36210206931129],
    zoom: 13,
    zoomControl: true
  });   

L.tileLayer('https://api.maptiler.com/maps/toner/{z}/{x}/{y}.png?key=UqsRtrg9BcWIXlx6LquC', {
	maxZoom: 20,
//    mapbox://styles/mapbox/satellite-streets-v11
	accessToken: 'UqsRtrg9BcWIXlx6LquC'
}).addTo(map);

var markerIcon = L.icon({
	iconUrl: 'location.svg',
	iconSize: [38, 95],
	iconAnchor: [0,5]
});

// L.marker([46.06362892338259, -118.36210206931129], {icon: markerIcon}).addTo(map);

var locations = [
  ["Main Campus", 46.06362892338259, -118.36210206931129],
  ["Crating Facility", 46.07190026554796, -118.35182193896028],
  ["Avery Facility", 46.05659416468007, -118.35979443478293],
  ["Mold Facility", 46.07484264936125, -118.35028436010276]

];

for (var i = 0; i < locations.length; i++) {
  marker = new L.marker([locations[i][1], locations[i][2]],{icon: markerIcon})
    .bindPopup(locations[i][0])
    .addTo(map);
}

});