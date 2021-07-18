//Menu
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

//Changing contact info based on screen size
const contactLinks = document.querySelectorAll('.header__links--contact > .header__link-item > .header__link');
window.addEventListener('resize', () => {
  if (window.innerWidth < 640) {
    contactLinks[1].textContent = 'Speak With Us';
  } else {
    contactLinks[1].textContent = 'yaunghein@protonmail.com';
  }
});
if (window.innerWidth < 640) {
  contactLinks[1].textContent = 'Speak With Us';
}

//Review Slider
const swiper = new Swiper('.swiper-container', {
  speed: 400,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 5000,
  },
});
