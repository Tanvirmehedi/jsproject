'use strict';
let btn = document.getElementById('enter');

let input = document.getElementById('input_on');

let ul = document.querySelector('ul');

let listTitle = document.querySelector('.listTitle');
let btnprint = document.querySelector('#printif');

console.log(listTitle.textContent);

btn.addEventListener('click', function () {
  if (input.value.length > 0) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';
  }
});
btn.addEventListener('keypress', function (e) {
  if (input.value.length > 0 && e.skeyCode === 13) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';
  }
});

let pnt = ht => {
  return window.print();
};

let hideBtn = () => {
  return (btnprint.style.display = 'none');
};

btnprint.addEventListener('click', function () {
  hideBtn();
  pnt((listTitle.style.display = 'none'));
});
