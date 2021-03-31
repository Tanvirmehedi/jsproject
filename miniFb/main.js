'use strict';
let database = [
  {
    username: 'Tanvir',
    password: 'tj',
  },
];

let timeline = [
  {
    username: 'mini',
    timeline: 'What should in my mind',
  },
  {
    username: 'keya',
    timeline: 'Should it done',
  },
];

let userNamePrompt = prompt('What Is your user name');

let userPasswordPrompt = prompt('what is your password');
// Rune the function

function signIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(timeline);
  } else if (user === '' && pass === '') {
    alert('Inpute User name And Password');
  } else {
    alert('Something is wrong');
  }
}
signIn(userNamePrompt, userPasswordPrompt);
