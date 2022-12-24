const accordionBtn = document.querySelector('.footer__global');
const accordionContent = document.querySelector('.footer__global-list');


accordionBtn.addEventListener('click', () => {
	accordionContent.classList.toggle('active');
	accordionBtn.classList.toggle('active');
})