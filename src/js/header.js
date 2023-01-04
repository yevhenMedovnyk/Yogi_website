const burgerMenu = document.querySelector('.menu');
const burgerBtn = document.querySelector('.menu__burger');
const burgerWrapper = document.querySelector('.burger-wrapper');
const body = document.querySelector('body');
const headerWrapper = document.querySelector('.header__wrapper');


burgerBtn.addEventListener('click', (e) => {
	e.preventDefault();
	if (burgerMenu.classList.contains('active')) {
		closeMenu();
	}
	else {
		openMenu()							
	}
})

burgerWrapper.addEventListener('click', () => {
	closeMenu();
	
})


const openMenu = () => {
	burgerMenu.classList.add('active');
	burgerWrapper.classList.add('active');
	body.classList.add('scroll-lock');
}

const closeMenu = () => {
	burgerMenu.classList.remove('active');
	burgerWrapper.classList.remove('active');
	body.classList.remove('scroll-lock');
}
