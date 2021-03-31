'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModel = document.querySelector('.close-modal');
const openModel = document.querySelectorAll('.show-modal');
const Open = function () {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.querySelector('body').style.background = 'yellow';
};

const Close = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
  document.querySelector('body').style.background = '';
};
for (let i = 0; i < openModel.length; i++)
  openModel[i].addEventListener('click', Open);
closeModel.addEventListener('click', Close);
overlay.addEventListener('click', Close);
