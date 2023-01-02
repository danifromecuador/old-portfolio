let menu = document.querySelector('.menu');
let hamburger = document.querySelector('.hamburger-icon-menu');

function display() {
  hamburger.classList.toggle('active');
}

menu.addEventListener('click',display);