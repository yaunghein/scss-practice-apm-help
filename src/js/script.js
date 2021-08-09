//Menu
const menuBtn = document.getElementById('menu-btn');
const menuText = document.getElementById('menu-text');
const navLinks = document.getElementById('nav-links');
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navLinks.classList.contains('open') ? (menuText.textContent = 'CLOSE') : (menuText.textContent = 'MENU');
});

//Changing contact info based on screen size
const contactLinks = document.querySelectorAll('.header__links--contact > .header__link-item > .header__link');
if (window.innerWidth < 640) {
  contactLinks[1].textContent = 'Contact Us';
  contactLinks[1].setAttribute('href', '#contact');
  contactLinks[0].textContent = 'Call APM Help';
}

//Remove hashtag in url
const linkTags = Array.from(document.getElementsByTagName('a'));
console.log(linkTags);
linkTags.forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(() => {
      history.replaceState(null, null, ' ');
    }, 10);
  });
});

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

//Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
});
