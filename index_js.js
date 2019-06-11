var slider = document.getElementById('container'),
	slides = document.getElementsByClassName('slide'),
	cursor = 0,
	slideWidth = 0,
	topHeight = 0,
	slideCount = slides.length;


if (slides.length > 0) {
	slideWidth = slides[0].offsetWidth; 	// get slide width

	//set the proper left value for each slide
	for (var i = 0; i < slideCount; i++) {
		slides[i].style.left = slideWidth * i + 'px';
	}

	calculateTallestSlide(); //calculate tallest slide

	
	//add event listener for next button
	document.getElementById('next').addEventListener('click', function(event) {
		event.preventDefault();

		if (cursor < slideCount - 1) {
			moveSlides('forward');
			cursor++;
		}
	});

	//add event listener for previous button
	document.getElementById('prev').addEventListener('click', function(event){
		event.preventDefault();

		if(cursor > 0) {
			moveSlides('backward');
			cursor--;
		}
	});
} 



function calculateTallestSlide() {
	for (var j = 0; j < slideCount; j++) {
		if (slides[j].offsetHeight > topHeight) {
			topHeight = slides[j].offsetHeight;
		}
	}
	slider.style.height = topHeight + 'px';
}

function moveSlides(direction) {
	for (var k = 0; k < slideCount; k++) {
		if (direction == 'backward') {
			slides[k].style.left = +slides[k].style.left.replace(/[^-\d\.]/g, '') + slideWidth + 'px';
		} else if (direction == 'forward') {
		slides[k].style.left = +slides[k].style.left.replace(/[^-\d\.]/g, '') - slideWidth  + 'px';
		}
	}
} 
