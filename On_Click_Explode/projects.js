//Project Archive
$(document).ready(function(){

var i;

	for (i = 0; i < slide_pulls.length; i++){

		var work_year = slide_pulls[i].year;

		document.getElementById("archive_menu").innerHTML += "<p class='work_year'>" + work_year + "</p><a class='filter archive_year' class='filter' slide-id='" + i + "' year-id='" + work_year + "'><div class='thumbnail' style=\"background-image:url('" + slide_pulls[i].image1 + "')\"></div><p class='thumnail_caption'>" + slide_pulls[i].work + "</p></a>"

	}

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

		console.log(slideID);

	});

	var yearArray = [];

	var n = document.getElementsByClassName("filter").length;

	console.log(n);

$('.filter').each( function(){

	var value = $(this).attr("year-id");
	yearArray.push(value);

	console.log(yearArray);

});

for( var i = 0; i < n ; i++ ){

	if( yearArray[i] = document.getElementsByClassName("filter")[i].getAttribute("year-id") ){

		document.getElementsByClassName("filter")[i].classList.add(yearArray[i]);
	}

	$('.'+yearArray[i]).wrapAll("<div class='year_grouping' />");

}


// $('.filter').each(function(){

// 	var yearid = $(this).attr("year-id");

// 	var sibling = $(this).siblings('.filter');

// 	var siblingid = sibling.attr("year-id");

// 	sibling.wrapAll(" <div class='year-grouping' /> ")

// });


// .each( function(){

// 	$(this).wrapAll("<div class='year_grouping' />");

// });


});