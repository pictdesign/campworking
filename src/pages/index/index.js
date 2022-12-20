import './styles/index.scss';

const header = document.querySelector('.header');
const burgerButton = document.querySelector('.burger__lines');
const overlay = document.querySelector('.burger__overlay');
const navigation = document.querySelector('.navigation');

const menuToggle = () => {
  burgerButton.classList.toggle('burger__lines_active');
  overlay.classList.toggle('burger__overlay_active');
  navigation.classList.toggle('navigation_active');
};

overlay.addEventListener('click', menuToggle);

const headerFixed = () => {
  if (scrollY > 500) {
    header.classList.add('header_fixed');
  }
  console.log(scrollY);
}

burgerButton.addEventListener('click', menuToggle);
document.addEventListener('scroll', headerFixed);