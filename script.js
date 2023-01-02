const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger-icon-menu');

function display() {
  hamburger.classList.toggle('active');
}

menu.addEventListener('click', display);
