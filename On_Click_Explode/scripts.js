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

$('#content').on("click", function explode(){


	if( !($('#side_menu_wrapper').hasClass('active')) ) {
	
			$('#content').css('position', 'relative');
			$('#content').animate({padding: '25px'});
	
			$('#content').addClass('reduced');
	
			$('header').css('position', 'relative');
			$('#slide_wrapper').animate({width: '85%'},200);
			$('#info_wrapper').animate({opacity: '1'});
			$('#info_wrapper').css('display', 'flex');
	
			$("#hamburger").css('filter', 'invert(1)');
			$("#logo").css('filter', 'invert(1)');
	
			$('#slides').css('display', 'block');
	
			$('#content').css('cursor', 'inherit');

			$('#full_attribution').removeClass('fullscreen');

			pause_slideshow = true;

		}

});



$('#slides').on("click", function exitExplode(){

	if ( $('#content').hasClass('reduced') ) {

		$('#content').css('position', 'absolute');
		$('#content').animate({padding: '0'});

		$('#content').removeClass('reduced');

		$('header').css('position', 'absolute');
		$('#slide_wrapper').animate({width: '100%'});
		$('#info_wrapper').animate({opacity: '0'});
		$('#info_wrapper').css('display', 'none');

		$("#hamburger").css('filter', 'invert(0)');
		$("#logo").css('filter', 'invert(0)');

		$('#slides').css('display', 'none');

		$('#content').css('cursor', 'crosshair');

		$('#full_attribution').addClass('fullscreen');

		pause_slideshow = false;

	}

});

//Slide Change

	//Load all image slides

var i;

for (i = 0; i < slide_pulls.length; i++){

	var slide_parent = document.getElementById("slide_container");

	slide_parent.innerHTML += "<div class='slide' slide-id='" + i + "' style=\"background-image:url('" + slide_pulls[i].image1 + "')\"></div>"

	var work_year = slide_pulls[i].year;

	// document.getElementById("slide_container").innerHTML += "<div class='slide' slide-id='" + i + "' style=\"background-image:url('" + slide_pulls[i].image1 + "')\"></div>"

}

move(0);

var i = 0;

$('#arrow_left').on("click", function(s){

	trans_slide(-1);
	s.stopPropagation();

	});

$('#arrow_right').on("click", function(s){

	trans_slide(1);
	s.stopPropagation();

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

	slide.eq(e).addClass('current');

	var newMove = cachedMove;

	slide.eq(e - 1).addClass('prev');

	slide.eq(e + 1).addClass('next');

	slide.not( slide.eq(e) ).removeClass('current');

	slide.not( slide.eq(e - 1) ).removeClass('prev');

	slide.not( slide.eq(e + 1) ).removeClass('next');

	//Logo Contrast

	// changeLogo = slide_pulls[e].logo_contrast;

	// if (slide_pulls[e].logo_contrast = 'dark'){

	// 	$('.st1').css('fill', 'black');

	// } else {

	// 	$('.st1').css('fill', 'white');

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

	console.log(slide_pulls[e].thumbs.length);

	$('.thumbnail').remove();

	document.getElementById("thumbnail_gallery").innerHTML = "<a class='active_thumb thumbnail' style=\"background-image:url('" + slide_pulls[e].image1 + "')\"></a>"

	for (var t = 0; t < slide_pulls[e].thumbs.length; t++){

		document.getElementById("thumbnail_gallery").innerHTML += "<a class='thumbnail' style=\"background-image:url('" + slide_pulls[e].thumbs[t] + "')\"></a>"

		console.log(slide_pulls[e].thumbs[t]);

	}

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

}

$(document).keydown(function(e) {
    switch (e.which) {
        case 37:
            e.preventDefault(), trans_slide(-1);
            break;
        case 39:
            e.preventDefault(), trans_slide(1);
            break;
    }
});

	var slideshow = window.setInterval(function(){

		if( !pause_slideshow ){

			trans_slide(1);
		}

	}, 4000);

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