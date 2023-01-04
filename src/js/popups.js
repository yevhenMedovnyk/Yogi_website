const loginPopupEl = document.querySelector('.login-popup');
const loginBtn = document.querySelector('.header__btns-login');
const body = document.querySelector('body');
const loginPopupCloseBtn = document.querySelector('.login-popup__close');
const burgerMenuActive = document.querySelector('.header__menu');

const signUpPopupEl = document.querySelector('.signUp-popup');
const signUpBtn = document.querySelector('.header__btns-signUp');
const signUpPopupCloseBtn = document.querySelector('.signUp-popup__close');


loginBtn.addEventListener('click', () => {
	loginPopupEl.classList.add('active');
	body.classList.add('scroll-lock');
})

document.addEventListener('click', (e) => {
	if (e.target == loginPopupEl || e.target == loginPopupCloseBtn) {
		loginPopupEl.classList.remove('active');
		if (burgerMenuActive.classList.contains('active')) {
			body.classList.add('scroll-lock');
		}
		else {
			body.classList.remove('scroll-lock');
		}
	}
})

signUpBtn.addEventListener('click', () => {
	signUpPopupEl.classList.add('active');
	body.classList.add('scroll-lock');
})

document.addEventListener('click', (e) => {
	if (e.target == signUpPopupEl || e.target == signUpPopupCloseBtn) {
		signUpPopupEl.classList.remove('active');
		if (burgerMenuActive.classList.contains('active')) {
			body.classList.add('scroll-lock');
		}
		else {
			body.classList.remove('scroll-lock');
		}
	}
})