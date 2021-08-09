const heroTl = gsap.timeline();
const duration = 0.8;
const ease = 'Power2.easeInOut';
heroTl.from('.sub-title', { duration, y: 16, opacity: 0, ease });
heroTl.from('.hero__title', { duration, y: 16, opacity: 0, ease }, '-=0.6');
heroTl.from('.hero__p', { duration, y: 16, opacity: 0, ease }, '-=0.6');
heroTl.from('.buttons-wrapper', { duration, y: 16, opacity: 0, ease }, '-=0.6');
heroTl.from('.hero__image-wrapper', { duration, scale: 0.8, opacity: 0, ease }, '-=0.8');
heroTl.from('.header__logo', { duration, opacity: 0, ease }, '-=0.8');
heroTl.from('.header__link', { duration, opacity: 0, ease, stagger: '0.1' }, '-=0.8');

AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
});
