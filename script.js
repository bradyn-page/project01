/*===== sticky navbar ========*/
window.onscroll = () => {

let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrolY > 100)
};