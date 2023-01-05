const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');
const pacMobile = document.querySelector('.PAC-mobile');
const body = document.querySelector('body');

hamburgerIcon.addEventListener('click', () => {
  hamburgerMenu.style.display = 'block';
  body.classList.toggle('body-fixed');
});
closeIcon.addEventListener('click', () => {
  hamburgerMenu.style.display = 'none';
  body.classList.remove('body-fixed');
});
pacMobile.addEventListener('click', () => {
  hamburgerMenu.style.display = 'none';
});

// pop up window code
