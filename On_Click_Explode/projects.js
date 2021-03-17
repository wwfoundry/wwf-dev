//Project Archive
$(document).ready(function(){

var i;

var tagArray = [];

	for (i = 0; i < slide_pulls.length; i++){

		var work_year = slide_pulls[i].year;

		var filterArray = slide_pulls[i].tag;

		var filterTag = filterArray.join(' ');

		var projectElements = document.createElement('div');

		projectElements.innerHTML += "<p class='work_year'>" + work_year + "</p><a class='filter filtered archive_year " + filterTag + "' class='filter' href='index.html#" + i + "' slide-id='" + i + "' year-id='" + work_year + "'><div class='thumbnail' style=\"background-image:url('" + slide_pulls[i].image1 + "')\"></div><p class='thumnail_caption'>" + slide_pulls[i].work + "</p></a>"

		document.getElementById("archive_menu").appendChild(projectElements);

		console.log(filterTag);

		tagArray.push(filterTag.split(' ')[0]);

	}
		var uniqueTag = [...new Set(tagArray)];

		console.log(uniqueTag);

	//Create filter btns from array
    for (var i=0; i < uniqueTag.length; i++) {
      document.getElementById("filters_menu").innerHTML += "<li id='" + uniqueTag[i] + "' class='tagFilter'>" + uniqueTag[i] + "</li>"
    }

    $('#filters_menu li:last').addClass("last");

 $('.tagFilter').click(function(){ 

  var tagName = $(this).prop('id');

  $('.filter').each(function(index, element){

  var selected = $(this).hasClass(tagName);

	  if (selected){

	    $(this).addClass("filtered");

	    $('.filtered').attr('data-content', tagName);

	    $('.filter').not('.'+tagName).removeClass("filtered");

	  }

  });

  $('.work_year').each( 

	function(){
		
		var subThumbs = $(this).next().find('filter');

		console.log(subThumbs);

		if ( !(subThumbs.hasClass('filtered')) ){

			$(this).css('display', 'none');

		}

	}

)

});


	var tags = [...document.getElementsByClassName('work_year')];
	var texts = new Set(tags.map(x => x.innerHTML));
	tags.forEach(tag => {
	  if(texts.has(tag.innerHTML)){
	    texts.delete(tag.innerHTML);
	  }
	  else{
	    tag.remove()
	  }
	});

	$('.filter').on("click", function(){

		var slideID = $(this).attr('slide-id');

		var r = true;

		move(slideID, r);

	});

	var yearArray = [];

	var n = document.getElementsByClassName("filter").length;

	console.log(n);

$('.filter').each( function(){

	var value = $(this).attr("year-id");
	yearArray.push(value);

	console.log(yearArray);

});

for(i = 0; i < n ; i++ ){

	if( yearArray[i] = document.getElementsByClassName("filter")[i].getAttribute("year-id") ){

		document.getElementsByClassName("filter")[i].classList.add(yearArray[i]);
	}

	$('.'+yearArray[i]).wrapAll("<div class='year_grouping' />");

}



});