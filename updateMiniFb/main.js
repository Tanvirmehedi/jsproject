'use strict';
const database = [
  {
    userName: 'tanvir',
    userPass: 'tj',
  },
  {
    userName: 'jisn',
    userPass: 'js',
  },
  {
    userName: 'gilt',
    userPass: '123',
  },
  {
    userName: 'noa',
    userPass: '000',
  },
];

const timeline = [
  {
    name: 'toy',
    post: 'here is your Book',
  },
  {
    name: 'boy',
    post: 'here is your knife',
  },
  {
    name: 'pool ',
    post: 'here is  the toy',
  },
  {
    name: 'fia',
    post: 'here is your romania',
  },
];

let userNamePrompt = prompt("What's your User Name!?");

let userPasswordPrompt = prompt("whats's your Password!?");

function userVarified(users, passs) {
  for (let i = 0; i < database.length; i++) {
    if (database[i].userName === users && database[i].userPass === passs) {
      return true;
    }
  }
  return false;
}

function userSignIn(user, pass) {
  if (userVarified(user, pass)) {
    console.log(timeline);
  } else {
    alert('Something Gose To wrong');
  }
}

userSignIn(userNamePrompt, userPasswordPrompt);
