//Menu
const menuBtn = document.getElementById('menu-btn');
const menuText = document.getElementById('menu-text');
const navLinkContainer = document.getElementById('nav-links');
menuBtn.addEventListener('click', () => {
  navLinkContainer.classList.toggle('open');
  navLinkContainer.classList.contains('open') ? (menuText.textContent = 'CLOSE') : (menuText.textContent = 'MENU');
});
const headerLinks = Array.from(document.getElementsByClassName('header__link'));
console.log(headerLinks);
headerLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinkContainer.classList.remove('open');
    menuText.textContent = 'MENU';
  });
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

//Show alert when click on link
const alertBox = document.getElementsByClassName('alert')[0];
const linkTagsToAddAlertClass = Array.from(document.getElementsByTagName('a'));
linkTagsToAddAlertClass.forEach(link => {
  if (
    !link.classList.contains('hero-btn') &&
    !link.classList.contains('header__menu') &&
    !link.classList.contains('header__link--contact') &&
    !link.classList.contains('prevent-alert')
  ) {
    link.classList.add('alert-link');
  }
});
const alertLinks = Array.from(document.getElementsByClassName('alert-link'));
const showAlerBox = () => {
  alertBox.classList.add('open');
  setTimeout(() => {
    alertBox.classList.remove('open');
  }, 5000);
};
alertLinks.forEach(link => {
  link.addEventListener('click', showAlerBox);
});
const contactForm = document.getElementsByClassName('contact__form')[0];
const contactBtn = document.getElementsByClassName('contact__button')[0];
contactBtn.addEventListener('click', e => {
  e.preventDefault();
  contactForm.reset();
  showAlerBox();
});
