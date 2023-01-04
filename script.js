const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');

function display() {
  hamburgerMenu.style.display = 'block'
}

hamburgerIcon.addEventListener('click', display);

function noneDisplay() {
  hamburgerMenu.style.display = 'none'
}

closeIcon.addEventListener('click', noneDisplay);
