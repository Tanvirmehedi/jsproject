'use strict';
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

const btn = document.querySelector('.btn-spcl');

const cngColor = document.querySelector('.cng-color');

const body = document.querySelector('body');

const getColor = () => {
  let haxColor = '#';

  for (let i = 0; i < 6; i++) {
    haxColor += colors[codeColor()];
  }
  cngColor.textContent = `HAX : ${haxColor}`;
  body.style.backgroundColor = haxColor;
};

btn.addEventListener('click', getColor);

const codeColor = () => Math.floor(Math.random() * colors.length);
