/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {
	Navigation,
	Pagination,
	Autoplay
} from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.no-swiper')) {
		new Swiper('.no-swiper', {
			// Подключаем модули слайдера
			// для конкретного случая
			//modules: [Navigation, Pagination],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			//pagination: {
			//	el: '.brands__pagination',
			//	clickable: true,
			//},
			// Arrows
			navigation: {
				nextEl: '.about__more .more__item_next',
				prevEl: '.about__more .more__item_prev',
			},
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			on: {

			}
		});
	}
	if (document.querySelector('.brands__slider')) {
		new Swiper('.brands__slider', {
			modules: [Pagination],
			grabCursor: false,
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 24,
			autoHeight: false,
			speed: 3000,
			loop: false,
			pagination: {
				el: '.brands__pagination',
				clickable: true,
			},
			breakpoints: {
				768: {
					slidesPerView: 5,
					spaceBetween: 85,
				},
			},
		});
	}
	if (document.querySelector('.top-reviews__slider')) {
		new Swiper('.top-reviews__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Autoplay],
			grabCursor: true,
			autoplay: {
				delay: 0,
				disableOnInteraction: false,
				pauseOnMouseEnter: false
			},
			//centeredSlides: true,
			observer: true,
			observeParents: true,
			slidesPerView: 2.8,
			spaceBetween: 60,
			autoHeight: false,
			speed: 8000,
			loop: false,
			breakpoints: {
				320: {
					slidesPerView: 1.2,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 1.4,
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: 2.2,
					spaceBetween: 20,
				},
				1500: {
					slidesPerView: 2.8,
					spaceBetween: 60,
				},
			},
		});
	}

	if (document.querySelector('.bottom-reviews__slider')) {
		let reviewSlider = new Swiper('.bottom-reviews__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Autoplay],
			grabCursor: true,
			autoplay: {
				delay: 0,
				disableOnInteraction: false,
				pauseOnMouseEnter: false,
				reverseDirection: true
			},
			observer: true,
			observeParents: true,
			slidesPerView: 2.8,
			spaceBetween: 60,
			autoHeight: false,
			speed: 9000,
			loop: false,
			breakpoints: {
				320: {
					slidesPerView: 1.2,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 1.4,
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: 2.2,
					spaceBetween: 20,
				},
				1500: {
					slidesPerView: 2.8,
					spaceBetween: 60,
				},
			},
		});

		reviewSlider.on('slideChange', function () {
			include('https://assets.calendly.com/assets/external/widget.js');
		});
	}



}

function include(url) {
	var script = document.createElement('script');
	script.src = url;
	document.getElementsByTagName('head')[0].appendChild(script);
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});