
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

[].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
	img.setAttribute('src', img.getAttribute('data-src'));
	img.onload = function () {
		img.removeAttribute('data-src');
	};
});

let mail = document.querySelector('.header-info__mail');
mail.addEventListener("click", function (e) {
	let mail_item = document.querySelector('.header-info__mail span');
	mail_item.classList.toggle('_active');
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.header-info__mail')) {
		let mail_item = document.querySelector('.header-info__mail span');
		mail_item.classList.remove('_active');
	}
});

let tel = document.querySelector('.header-info__tel');
tel.addEventListener("click", function (e) {
	let tel_item = document.querySelector('.header-info__tel span');
	tel_item.classList.toggle('_active');
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.header-info__tel')) {
		let tel_item = document.querySelector('.header-info__tel span');
		tel_item.classList.remove('_active');
	}
});

const tabs = document.querySelectorAll('a._tab')

for (let tab of tabs) {
	tab.addEventListener('click', function (e) {
		e.preventDefault()

		var other_tabs = document.querySelectorAll('a._tab');
		var other_blocks = document.querySelectorAll('.take-your__row');

		for (let other_block of other_blocks) {
			other_block.classList.remove('_open');
		}

		for (let other_tab of other_tabs) {
			other_tab.classList.remove('_active');
		}

		tab.classList.add('_active');

		const blockID = tab.getAttribute('href')

		document.querySelector(blockID).classList.add('_open');
	})
}

var content_head_slider = new Swiper('.content-head-slider', {
	direction: 'vertical',
	slidesPerView: 1,
	spaceBetween: 30,
	// mousewheel: true,
	/*
	toplay: {
	  delay: 3000,
	  disableOnInteraction: false,        
	},
	*/
	initialSlide: 1,
	//Навигация
	//Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',

		//Буллеты
		clickable: true,
		//Динамические буллеты
		//dynamicBullets: true,
		/*
		//Кастомные буллеты
		renderBullet: function (index, className) {
			 return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
		*/
	},
	// autoplay: {
	// 	delay: 2000,
	// 	disableOnInteraction: false,
	// },

	//включение/отключения перетаскивания/свайпа на пк
	simulateTouch: true,
	//Чувствительность свайпа
	touchRatio: 1,
	//Угол срабатывания свайпа
	touchAngle: 45,
	//Курсор перетаскивания
	grabCursor: false,

	// Переключение при клике на слайд
	slideToClickedSlide: true,
});

var ads_big_slider = new Swiper('.ads-big-slider', {
	// direction: 'vertical',
	// slidesPerView: 1,
	spaceBetween: 85,
	// mousewheel: true,
	/*
	toplay: {
	  delay: 3000,
	  disableOnInteraction: false,        
	},
	*/
	initialSlide: 1,
	//Навигация
	//Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',

		//Буллеты
		clickable: true,
		//Динамические буллеты
		//dynamicBullets: true,
		/*
		//Кастомные буллеты
		renderBullet: function (index, className) {
			 return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
		*/
	},
	// autoplay: {
	// 	delay: 2000,
	// 	disableOnInteraction: false,
	// },

	//включение/отключения перетаскивания/свайпа на пк
	simulateTouch: true,
	//Чувствительность свайпа
	touchRatio: 1,
	//Угол срабатывания свайпа
	touchAngle: 45,
	//Курсор перетаскивания
	grabCursor: false,

	// Переключение при клике на слайд
	slideToClickedSlide: true,
});

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('_active');
		$('body').toggleClass('_lock');
	});

	const popupLinks = document.querySelectorAll('.popup-link');
	const body = document.querySelector('body');
	const lockPadding = document.querySelectorAll('.lock-padding');
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	$('.popup-link').click(function (event) {
		event.preventDefault();
		$('.popup').toggleClass('_open');
		$('body').toggleClass('_lock-popup');
		body.style.paddingRight = lockPaddingValue;
	});

	$('.popup-close').click(function (event) {
		event.preventDefault();
		$('.popup').toggleClass('_open');
		$('body').toggleClass('_lock-popup');
		body.style.paddingRight = '0px';
	});

	$('.login-form__btn').click(function (event) {
		if (document.login_form.login_mail.value == "" || document.login_form.login_pass.value == "") {
			if (document.login_form.login_mail.value == "") { document.login_form.login_mail.classList.add('_empty') } else { document.login_form.login_mail.classList.remove('_empty') };
			if (document.login_form.login_pass.value == "") { document.login_form.login_pass.classList.add('_empty') } else { document.login_form.login_pass.classList.remove('_empty') };
			$('.login-form__empty').addClass('_err');
			event.preventDefault();
		} else {
			$('.popup').removeClass('_open');
			$('body').removeClass('_lock-popup');
			body.style.paddingRight = '0px';
		}
	});
});;

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.popup__content') && !e.target.closest('.popup-link')) {
		let popup = document.querySelector('.popup');
		let body = document.querySelector('body');
		popup.classList.remove('_open');
		body.classList.remove('_lock-popup');
		const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.style.paddingRight = '0px';
	}
});

$('.content-head-form__btn').click(function (event) {
	if (document.head_form.head_make.value == "" && document.head_form.head_model.value == "" && document.head_form.head_city.value == "") {
		if (document.head_form.head_make.value == "") { document.head_form.head_make.classList.add('_empty') } else { document.head_form.head_make.classList.remove('_empty') };
		if (document.head_form.head_model.value == "") { document.head_form.head_model.classList.add('_empty') } else { document.head_form.head_model.classList.remove('_empty') };
		if (document.head_form.head_city.value == "") { document.head_form.head_city.classList.add('_empty') } else { document.head_form.head_city.classList.remove('_empty') };
		$('.content-head-form__empty').addClass('_active');
		event.preventDefault();
	} else {
		$('.popup').removeClass('_open');
		$('body').removeClass('_lock-popup');
		$('.content-head-form__empty').removeClass('_active');
		body.style.paddingRight = '0px';
	}
});

$.each($('.radiobuttons__item'), function (index, val) {
	if ($(this).find('input').prop('checked') == true) {
		$(this).addClass('_active')
	}
});

$(document).on('click', '.radiobuttons__item', function (event) {
	$(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('_active');
	$(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);
	$(this).toggleClass('_active');
	$(this).find('input').prop('checked', true);
	return false;
});

$('.search-form__advance-btn').click(function (event) {
	$(this).toggleClass('_active');
	$('.search-form__btn').toggleClass('_open');
	$('.search-form__advanced').toggleClass('_open');
});

