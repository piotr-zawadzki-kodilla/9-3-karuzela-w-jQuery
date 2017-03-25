$(function(){
	var carouselList = $("#carousel ul");

	function moveFirstSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({marginLeft: 0});
	}

	function moveLastSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		firstItem.before(lastItem);
		carouselList.css({marginLeft: -400});
	}

	function changeNextSlide() {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	}

	function changePrevSlide() {
		carouselList.animate({'marginLeft': 0}, 500);
	}

	var interval = setInterval(changeNextSlide, 3000);

	$('#rightArrow').click(function(event) {
		clearInterval(interval);
		changeNextSlide();
		interval = setInterval(changeNextSlide, 3000);
	});

	$('#leftArrow').click(function(event) {
		clearInterval(interval);
		moveLastSlide();
		changePrevSlide();
		interval = setInterval(changeNextSlide, 3000);
	});
});
