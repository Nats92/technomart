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

var formWrap = document.querySelector(".feedback-form-wrap");
var writeUsButt = document.querySelector(".write-us-button");
var closeButt = document.querySelector(".close-form");

writeUsButt.addEventListener("click", function(evt) {
	evt.preventDefault();
	formWrap.classList.remove("hidden");

	formWrap.addEventListener("click", function emptyPlaceClick(evt) {
		if (evt.target === formWrap) {
			formWrap.classList.add("hidden");
			formWrap.removeEventListener("click", emptyPlaceClick);
		}
	})
	closeButt.addEventListener("click", function closeButtClick() {
		formWrap.classList.add("hidden");
		formWrap.removeEventListener("click", closeButtClick);
	})
	document.addEventListener("keydown", function onEscPress(evt) {
		if(evt.keyCode === 27) {
			formWrap.classList.add("hidden");
			document.removeEventListener("click", onEscPress);
		}
	})
})

ymaps.ready(init);
var map,
	mapPopup,
	placemark,
	placemarkPopup;

function init() {
    map = new ymaps.Map("interactive-map", {
        center: [59.938631, 30.323055],
        zoom: 16
    });
    
    placemark = new ymaps.Placemark([59.938631, 30.323055], {
    	hintContent: "магазин Техномарт",
    	balloonContent: "магазин Техномарт. г. Санкт-Петербург, улица Большая Конюшенная, дом 19"
    	});
    map.geoObjects.add(placemark);
    map.controls.remove('trafficControl');
    map.controls.remove('fullscreenControl');
    map.controls.remove('typeSelector');
    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('routeButton');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');


    placemark.hint.open([59.939557, 30.323505]);

    mapPopup = new ymaps.Map("map-popup", {
        center: [59.938631, 30.323055],
        zoom: 15
    });

    placemarkPopup = new ymaps.Placemark([59.938631, 30.323055], {
    	hintContent: "магазин Техномарт",
    	balloonContent: "магазин Техномарт. г. Санкт-Петербург, улица Большая Конюшенная, дом 19"
    	});

 	mapPopup.geoObjects.add(placemarkPopup);
    mapPopup.controls.remove('trafficControl');
    mapPopup.controls.remove('fullscreenControl');
    mapPopup.controls.remove('typeSelector');
}

var mapPart = document.querySelector(".map-overlay");
var modalMap = document.querySelector("#map-popup");
var modalClose = document.querySelector(".close-map-popup");

mapPart.addEventListener("click", function() {
	modalMap.classList.remove("hidden");

	modalClose.addEventListener("click", function () {
		modalMap.classList.add("hidden");
	})
})
