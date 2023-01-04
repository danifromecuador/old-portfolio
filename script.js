const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');
const pacMobile = document.querySelector('.PAC-mobile');

hamburgerIcon.addEventListener('click', () => {
  hamburgerMenu.style.display = 'block';
});

closeIcon.addEventListener('click', () => hamburgerMenu.style.display = 'none');
pacMobile.addEventListener('click', () => hamburgerMenu.style.display = 'none');
