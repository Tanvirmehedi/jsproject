'use strict';

const colors = [
  'aqua',
  'black',
  'blue',
  'fuchsia',
  'gray',
  'green',
  'lime',
  'maroon',
  'navy',
  'olive',
  'orange',
  'purple',
  'red',
  'silver',
  'teal',
  'white',
  'yellow',
];

const btn = document.querySelector('.btn-spcl');

const cngColor = document.querySelector('.cng-color');

const body = document.querySelector('body');

const getColor = () => {
  const randomNumber = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[randomNumber];

  cngColor.textContent = colors[randomNumber];
  cngColor.style.color = colors[randomNumber];
};

btn.addEventListener('click', getColor);
