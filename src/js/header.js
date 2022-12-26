const burgerMenu = document.querySelector('.menu');
const burgerBtn = document.querySelector('.menu__burger');
const burgerWrapper = document.querySelector('.burger-wrapper');
const body = document.querySelector('body');
const headerWrapper = document.querySelector('.header__wrapper');

burgerBtn.addEventListener('click', (e) => {
	e.preventDefault();
	openMenu();
})

burgerWrapper.addEventListener('click', () => {
	closeMenu();
})


const openMenu = () => {
	burgerMenu.classList.toggle('active');
	burgerWrapper.classList.toggle('active');
	body.classList.toggle('scroll-lock');
}

const closeMenu = () => {
	burgerMenu.classList.remove('active');
	burgerWrapper.classList.remove('active');
	body.classList.remove('scroll-lock');

}

document.addEventListener('scroll', (e) => {
	
})