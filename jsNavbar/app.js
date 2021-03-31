let btn = document.querySelector('.toggle');
let nav = document.querySelector('.nav-link');
let navLinks = document.querySelectorAll('.nav-link li');
let logo = document.querySelector('.navbrand a');
const openNav = () => {
  //tuggle animation
  btn.classList.toggle('pagol');
  // tuggle
  nav.classList.toggle('nav-active');
  logo.style.letterSpacing
    ? (logo.style.letterSpacing = '')
    : (logo.style.letterSpacing = `6px`);
  //add animation
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navAnimi 0.5s linear forwards ${
        index / 7 + 0.1
      }s`;
    }
  });
};
btn.addEventListener('click', openNav);
