const modalWindow = document.querySelector('.modal');
const BtnPlay = document.querySelectorAll('.button__play');

BtnPlay.forEach((item, i) => {
	item.addEventListener('click',
		() => {
			modalWindow.classList.add('active');
		})
})

modalWindow.addEventListener('click', () => {
	modalWindow.classList.remove('active');
})