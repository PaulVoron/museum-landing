'use strict';

const buttonLabel = document.querySelector('.button__label');
const buttonLink = document.querySelector('.button__link');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    document.querySelector('.header').classList.add('page--blur');
    document.querySelector('main').classList.add('page--blur');
    buttonLabel.classList.add('button__non-active');
    buttonLink.classList.add('button__non-active');
  } else {
    document.body.classList.remove('page__body--with-menu');
    document.querySelector('.header').classList.remove('page--blur');
    document.querySelector('main').classList.remove('page--blur');
    buttonLabel.classList.remove('button__non-active');
    buttonLink.classList.remove('button__non-active');
  }
});

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});

const showOnPx = 500;
const backToTopButton = document.querySelector('.page__back-to-top');

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener('scroll', () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove('page__back-to-top--hidden');
  } else {
    backToTopButton.classList.add('page__back-to-top--hidden');
  }
});

const goToTop = () => {
  document.body.scrollIntoView();
};

backToTopButton.addEventListener('click', goToTop);
