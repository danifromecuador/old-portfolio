const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger-icon-menu');
const canvas = document.querySelector('.canvas');

function display() {
  hamburger.classList.toggle('active');
  // canvas.classList.toggle('inactive');
}

menu.addEventListener('click', display);
