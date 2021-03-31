'use strict';

const myForm = document.querySelector('#my-form');

const userName = document.querySelector('#name');

const userEmail = document.querySelector('#email');

const btn = document.querySelector('.btn');

const msg = document.querySelector('.msg');

const onSubmit = e => {
  e.preventDefault();
  if (userName.value === '' || userEmail.value === '') {
    msg.innerHTML = 'Plese Fill The Name & Email Field';
    msg.classList.add('error');
    setTimeout(() => msg.remove(), 3000);
  } else {
    let createTag = document.createElement('li');
    let createNode = document.createTextNode(
      `${userName.value}: ${userEmail.value}`
    );
    createTag.appendChild(createNode);
    let selectUser = document.querySelector('#users');
    selectUser.appendChild(createTag);
    userName.value = '';
    userEmail.value = '';
  }
};

btn.addEventListener('click', onSubmit);
