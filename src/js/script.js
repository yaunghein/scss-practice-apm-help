const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

const contactLinks = document.querySelectorAll('.header__links--contact > .header__link-item > .header__link');
window.addEventListener('resize', () => {
  if (window.innerWidth < 640) {
    contactLinks[1].textContent = 'Speak With Us';
  }
});

if (window.innerWidth < 640) {
  contactLinks[1].textContent = 'Speak With Us';
}
