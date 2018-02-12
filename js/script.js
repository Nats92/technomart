"use strict";


var prevSlideArrow = document.querySelector(".previous-slide");
var nextSlideArrow = document.querySelector(".next-slide");
var promoSlides = document.querySelectorAll(".promo-slider-item");


function slideNumber() {
	for (var i = 0; i < promoSlides.length; i++) {
		if (promoSlides[i].classList.contains("current-slide")) {
			return i;	
		}
	}
}

prevSlideArrow.addEventListener("click", function() {
	var currSlideNumber = slideNumber();

	promoSlides[currSlideNumber].classList.remove("current-slide");
	if (currSlideNumber < 1) {
		promoSlides[promoSlides.length - 1].classList.add("current-slide");
	} else {
		promoSlides[currSlideNumber - 1].classList.add("current-slide");
	}
})

nextSlideArrow.addEventListener("click", function() {
	var currSlideNumber = slideNumber();

	promoSlides[currSlideNumber].classList.remove("current-slide");
	if (currSlideNumber === promoSlides.length - 1) {
		promoSlides[0].classList.add("current-slide");
	} else {
		promoSlides[currSlideNumber + 1].classList.add("current-slide");
	}
})


var serviceSliderBtns = document.querySelectorAll(".services-slider-buttons-item");
var servicesSlides = document.querySelectorAll(".services-slider-item");

for (var i = 0; i < serviceSliderBtns.length; i++) {
	serviceSliderBtns[i].addEventListener("click", function(evt) {
		if (!evt.currentTarget.classList.contains("current-button")) {

			for (var j = 0; j < serviceSliderBtns.length; j++) {
				serviceSliderBtns[j].classList.remove("current-button");
			}
			for (var k = 0; k < serviceSliderBtns.length; k++) {
				if (evt.currentTarget === serviceSliderBtns[k]) {
					if (!servicesSlides[k].classList.contains("current-slide")) {
						for (var m = 0; m < servicesSlides.length; m++) {
							servicesSlides[m].classList.remove("current-slide");
						}
						servicesSlides[k].classList.add("current-slide");
						serviceSliderBtns[k].classList.add("current-button");
					}
				}
			}
		}
	})
}

