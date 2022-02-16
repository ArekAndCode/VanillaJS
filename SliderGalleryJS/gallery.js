const images = document.querySelectorAll('.picture img');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup_close');

images.forEach((picture) => {
    picture.addEventListener('click', () => {
        popup.classList.remove('hidden');
    });
}); 


popupClose.addEventListener('click', () => {
        popup.classList.add('hidden');
});