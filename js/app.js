
import * as flsFunctions from "./modules/function.js";

flsFunctions.isWebP();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

// Определение устройства на котором открыли Пк или Мобилка
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
	.test(navigator.userAgent)) {
	document.body.classList.add('_touc');
	//alert("Вы используете мобильное устройство (телефон или планшет).")
} else {
	//alert("Вы используете ПК.")
	document.body.classList.add('_pc');
}

// Бургер
const iconMenu = document.querySelector('.burger__icon');
const iconMenuSpan = document.querySelector('.burger__icon-span');
const burgerMenu = document.querySelector('.header__burger');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		iconMenuSpan.classList.toggle('_active');
		burgerMenu.classList.toggle('_active');
	})
}

// Прокрутка при клике
const menuLink = document.querySelectorAll('.menu__link[data-goto]');
if (menuLink.length > 0) {
	menuLink.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkCkick);
	});

	function onMenuLinkCkick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			// Выщитывает высоту шапки для точной прокрутки
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.burger__page').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				iconMenuSpan.classList.remove('_active');
				burgerMenu.classList.remove('_active');
			};

			// Скрипт прокрутки
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth" // Тип прокрутки Плавная
			});
			e.preventDefault(); // Отключение перехода по ссылке
		}
	}
}

// slic slider
$(document).ready(function () {
	$('.banner__slider').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true
	});
});

/*
//Перехoд на другую страницу
document.getElementsByClassName('.menu__link').onclick = function () {
	document.addEventListener('.menu__link').classList.add('menu__link-active');
}


const links = document.querySelector('.menu__link');
if (links) {
	links.addEventListener("click", function (e) {
		links.classList.toggle('menu__link-active');
	})
}
*/

//======================================================================================================================
// Вывод товара из файда goods.jason
function init() { // Функция init - выполняет стартовый запуск
	$.getJSON("goods.json", goodsOut); // Вычитываем файл goodsJson
}

function goodsOut(data) {
	// Вывод на страницу
	//var goods = JSON.parse(data);
	console.log(data);
}

init();
//======================================================================================================================

console.log('It`s work'); // test